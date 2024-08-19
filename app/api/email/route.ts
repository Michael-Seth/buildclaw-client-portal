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
  const { recipient, subject, items } = await request.json();

  const itemsTableRows = items
    .map(
      (item: Item) => `
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">${
        item.serviceName
      }</td>
      <td style="border: 1px solid #ddd; padding: 10px;">${item.status}</td>
      <td style="border: 1px solid #ddd; padding: 10px; text-align: right;">${formatPrice(item.price)}</td>
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
            src="https://brandmeals.com/wp-content/uploads/2024/08/Email-Newsletter-Header-min-min.png"
            alt="Brandmeals Email Newsletter Header"
            style="max-width: 100%"
          />
        </div>

        <div class="content" style="padding: 30px; text-align: left; color: #111015">
          <h2 style="color: #531507;">Thank You for Choosing Brandmeals!</h2>

          <h1 style="color: #333333; font-size: large">Dear Customer,</h1>
          <p style="font-size: 14px; line-height: 2">Thank you for choosing Brandmeals! We are delighted to confirm your purchase of our services. Below is a summary of the services you have selected, including their descriptions and prices:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <thead>
                  <tr style="background-color: #f8f9fa;">
                      <th style="border: 1px solid #ddd; padding: 10px; text-align: left;">Service</th>
                      <th style="border: 1px solid #ddd; padding: 10px; text-align: left;">Description</th>
                      <th style="border: 1px solid #ddd; padding: 10px; text-align: right;">Price</th>
                  </tr>
              </thead>
              <tbody>
                  ${itemsTableRows}
              </tbody>
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

    console.log(transporter);

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

/**  try {
    const transporter = nodemailer.createTransport({
      host: NEXT_PUBLIC_SMTP_SERVER,
      port: Number(NEXT_PUBLIC_SMTP_PORT),
      secure: true, 
      auth: {
        user: NEXT_PUBLIC_SMTP_USER,
        pass: NEXT_PUBLIC_SMTP_PASSWORD,
      },
      logger: true,
      debug: true,
    });

    // Send email
    const mailOptions = {
      from: NEXT_PUBLIC_SMTP_USER,
      to: recipient,
      subject: subject,
      html: body,
    };

    await transporter.sendMail(mailOptions);

    // Handle IMAP
    const imap = new Imap({
      user: NEXT_PUBLIC_SMTP_USER,
      password: NEXT_PUBLIC_SMTP_PASSWORD,
      host: NEXT_PUBLIC_IMAP_SERVER,
      port: Number(NEXT_PUBLIC_IMAP_PORT),
      tls: true,
    });

    imap.once("ready", () => {
      imap.openBox("Sent", true, (err) => {
        if (err) {
          console.error('Error opening "Sent" folder:', err);
          imap.end();
          return;
        }

        const emailMessage = `From: ${NEXT_PUBLIC_SMTP_USER}\r\nTo: ${recipient}\r\nSubject: ${subject}\r\n\r\n${body}`;

        imap.append(emailMessage, { mailbox: "Sent" }, (appendErr) => {
          if (appendErr) {
            console.error('Error appending email to "Sent" folder:', appendErr);
          } else {
            console.log('Email appended to "Sent" folder.');
          }
          imap.end();
        });
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
  } */
