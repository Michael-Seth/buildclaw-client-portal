import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
// import Imap from 'imap';
const Imap = require("imap");
import {
  NEXT_PUBLIC_SMTP_SERVER,
  NEXT_PUBLIC_SMTP_PORT,
  NEXT_PUBLIC_SMTP_USER,
  NEXT_PUBLIC_SMTP_PASSWORD,
  NEXT_PUBLIC_IMAP_SERVER,
  NEXT_PUBLIC_IMAP_PORT,
} from "@/constants/http/config";
import { Item } from "@/constants/context/MyContext";
import { formatPrice } from "@/constants/utils/helpers";

export async function POST(request: NextRequest) {
  const {
    recipient,
    subject,
    items,
    selectedPackage,
    total,
    status,
    pendingBalance,
    clientName,
  } = await request.json();

  const itemsTableRows = items
    .map(
      (item: Item) => `
    <tr>
              <td style="padding: 10px">
                <strong style="display: block; margin-bottom: 4px"
                  >${item.serviceName}</strong
                >
                <span style="font-size: 14px; color: #2c2c2d"
                  >${item.status}</span
                >
              </td>
              <td style="padding: 10px; font-weight: 500; text-align: right">
              ${formatPrice(item.price)}
              </td>
            </tr>
  `
    )
    .join("");

  const body = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body
      style="
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif;
        background-color: #f4f4f4;
        font-size: 15px;
        margin: 0;
        padding: 0;
      "
    >
      <div
        class="container"
        style="
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        "
      >
        <div class="header">
          <img
            src="https://brandmeals.com/wp-content/uploads/2024/07/Email-Header-min.png"
            alt="Brandmeals Email Newsletter Header"
            style="max-width: 100%"
          />
        </div>

        <div class="content" style="padding: 30px; text-align: left; color: #111015">
          <h2 style="color: #531507;">Thank You for Choosing Brandmeals!</h2>

          <h1 style="color: #333333; font-size: large">Dear ${
            clientName ? clientName : "Customer"
          },</h1>
          <p style="font-size: 14px; line-height: 2">Thank you for choosing Brandmeals! We are delighted to confirm your purchase of our services. Below is a summary of the services you have selected, including their descriptions and prices:</p>

          <table style="width: 100%; border-radius: 10px; margin-top: 20px">
            <thead>
              <tr style="background-color: #9b4431; color: #ffffff">
                <th style="padding: 10px; text-align: left">Total</th>
                <th
                  style="
                    padding: 10px;
                    font-weight: 500;
                    background-color: #f4f4f4;
                    color: #2c2c2d;
                    text-align: center;
                  "
                >
                  ${total ? formatPrice(total) : ""}
                </th>
              </tr>
              <tr style="background-color: #9b4431; color: #ffffff">
                <th style="padding: 10px; text-align: left">Status</th>
                <th
                  style="
                    padding: 10px;
                    font-weight: 500;
                    background-color: #577f68;
                    color: #ffffff;
                    text-align: center;
                  "
                >
                  ${status ? status : ""}
                </th>
              </tr>
              <tr style="background-color: #9b4431; color: #ffffff">
                <th style="padding: 10px; text-align: left">Pending Balance</th>
                <th
                  style="
                    padding: 10px;
                    font-weight: 500;
                    background-color: #f4f4f4;
                    color: #2c2c2d;
                    text-align: center;
                  "
                >
                  ${pendingBalance ? formatPrice(pendingBalance) : ""}
                </th>
              </tr>
            </thead>
          </table>

          <p style="margin-top: 20px; font-size: 14px; line-height: 2">If you have any questions or need further assistance, please don’t hesitate to reach out to us. We are here to help!</p>
          <p style="margin-top: 20px; font-size: 14px; line-height: 2">Thank you once again for your trust in Brandmeals. We look forward to working with you and supporting your business’s success.</p>
          
          <p style="margin-top: 20px; line-height: 1.5; font-weight: 500;">Best regards,<br>
          Joy Ehiedu<br>
          Sales Manager<br>
          Brandmeals<br>
          <a href="tel:+2349133303018" style="color: #531507">09133303018</a></p>
        </div>
        <a
          href="http://brandmeals.com/"
          style="text-decoration: none; margin-top: 50px"
          target="_blank"
          ><div
            class="footer"
            style="
              background-color: #531507;
              color: #ffffff;
              padding: 20px;
              text-align: center;
            "
          >
            <p>&copy; 2024 Brandmeals || All rights reserved.</p>
          </div></a
        >
      </div>
    </body>
  </html>`;

  try {
    const transporter = nodemailer.createTransport({
      host: NEXT_PUBLIC_SMTP_SERVER,
      port: Number(NEXT_PUBLIC_SMTP_PORT),
      secure: true, // Use 'true' for port 465, 'false' for port 587
      auth: {
        user: NEXT_PUBLIC_SMTP_USER,
        pass: NEXT_PUBLIC_SMTP_PASSWORD,
      },
      logger: true, // Log to console
      debug: true, // Include SMTP traffic in the logs
    });

    const mailOptions = {
      from: NEXT_PUBLIC_SMTP_USER,
      to: recipient,
      subject: subject,
      html: body,
    };

    await transporter.sendMail(mailOptions);

    // Now, use node-imap to save the email to the "Sent" folder
    const imap = new Imap({
      user: NEXT_PUBLIC_SMTP_USER,
      password: NEXT_PUBLIC_SMTP_PASSWORD,
      host: NEXT_PUBLIC_IMAP_SERVER,
      port: Number(NEXT_PUBLIC_IMAP_PORT),
      tls: true,
    });

    // IMAP connection
    imap.once("ready", function () {
      imap.openBox("Sent", true, function (err: Record<any, string>) {
        if (err) {
          console.error('Error opening "Sent" folder:', err);
          imap.end();
          return;
        }

        const emailMessage = `From: ${NEXT_PUBLIC_SMTP_USER}\r\nTo: ${recipient}\r\nSubject: ${subject}\r\n\r\n${body}`;

        imap.append(
          emailMessage,
          { mailbox: "Sent" },
          (appendErr: Record<any, string>) => {
            if (appendErr) {
              console.error(
                'Error appending email to "Sent" folder:',
                appendErr
              );
            } else {
              console.log('Email appended to "Sent" folder.');
            }
            imap.end();
          }
        );
      });
    });

    imap.once("error", (imapErr: Record<any, string>) => {
      console.error("IMAP Error:", imapErr);
    });

    imap.connect();

    return NextResponse.json({
      message: "Email sent and saved to Sent folder successfully.",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email." },
      { status: 500 }
    );
  }
}
