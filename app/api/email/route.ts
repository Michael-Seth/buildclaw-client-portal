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

  const formattedDate = new Date()

  // const itemsTableRows = items
  //   .map(
  //     (item: Item) => `
  //   <tr>
  //             <td style="padding: 10px">
  //               <strong style="display: block; margin-bottom: 4px"
  //                 >${item.serviceName}</strong
  //               >
  //               <span style="font-size: 14px; color: #2c2c2d"
  //                 >${item.status}</span
  //               >
  //             </td>
  //             <td style="padding: 10px; font-weight: 500; text-align: right">
  //             ${formatPrice(item.price)}
  //             </td>
  //           </tr>
  // `
  //   )
  //   .join("");

  const body = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>Brandmeals - Payment Confirmation</title>
  </head>
  <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f7f7f7;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f7f7f7; padding: 20px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 8px; padding: 20px;">
            <tr>
              <td align="center" style="padding: 0;">
                <img src="http://brandmeals.com/wp-content/uploads/2024/07/Email-Header-min.png" alt="Brandmeals" width="100%" />
              </td>
            </tr>
            <tr>
              <td align="center" style="padding: 20px;">
                <h1 style="font-size: 24px; color: #333333;">Payment Confirmation</h1>
                <p style="font-size: 16px; display: inline-block; background-color: #531507; padding: 7.5px 15px; border-radius: 2px; color: #ffffff; letter-spacing: 1px; margin: 0;"><b>PAID</b></p>
              </td>
            </tr>
            <tr>
              <td style="height: 20px;"></td>
            </tr>
            <tr>
              <td style="padding: 0 20px 20px 20px; font-size: 14px; color: #787878;">
                <b style="color: #333333;">Dear ${clientName ? clientName : "Customer"},</b>
                <p>Thank you for choosing Brandmeals! We are delighted to confirm your purchase of our services. Below is a summary of the services you have selected, including their descriptions and prices.</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 0 20px;">
                <table width="100%" cellpadding="5" cellspacing="0" border="0" style="font-size: 14px; color: #333333; border-collapse: collapse;">
                  <tr style="background-color: #f1f1f1;">
                    <td style="padding: 8px; text-align: left;" colspan="2">
                      <b>Payment Status:</b> ${status ? "Successful" : "Failed"}
                    </td>
                    <td style="width: 33%;" colspan="1">
                    </td>
                    <td style="padding: 8px; text-align: left;" colspan="2">
                      <b>Date:</b> ${formattedDate}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px;">
                <table width="100%" cellpadding="5" cellspacing="0" border="0" style="font-size: 14px; color: #333333; border-collapse: collapse;">
                  <thead>
                    <tr style="background-color: #f14f2b; color: #ffffff;">
                      <th style="padding: 10px; text-align: left;">Item</th>
                      <th style="padding: 10px; text-align: right;">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="background-color: #f9f9f9;">
                      <td style="padding: 10px; text-align: left;">Website Design & Development</td>
                      <td style="padding: 10px; text-align: right;">₦400,000</td>
                    </tr>
                    <tr style="background-color: #f9f9f9;">
                      <td style="padding: 10px; text-align: left;">Domian Name</td>
                      <td style="padding: 10px; text-align: right;">₦0.00</td>
                    </tr>
                    <tr style="background-color: #f9f9f9;">
                      <td style="padding: 10px; text-align: left;">Web Host</td>
                      <td style="padding: 10px; text-align: right;">₦0.00</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td style="height: 10px;"></td>
                    </tr>
                    <tr>
                      <td style="padding: 10px; text-align: left;"><b>Total Amount:</b></td>
                      <td style="padding: 10px; text-align: right;">₦400,000.00</td>
                    </tr>
                  </tfoot>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px;">
                <table width="100%" cellpadding="5" cellspacing="0" border="0" style="font-size: 14px; color: #333333;">
                  <tr>
                    <td style="padding: 10px; text-align: left; vertical-align: top;">
                      <b>Payment Type:</b><br>Debit Card
                    </td>
                    <td style="width: 33%; "></td>                    
                    <td style="padding: 10px; text-align: left; vertical-align: top;">
                      <b>Paid:</b> ${total ? formatPrice(total) : "-"}<br>
                      <b>Balance Due:</b> ${pendingBalance ? formatPrice(pendingBalance) : "0.00"}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 30px; font-size: 14px; text-align: left; color: #747474;">
                <p>If you have any questions or need further assistance, please don’t hesitate to reach out to us. We are always happy to assist you.</p><br>
                <p style="text-align: center; font-size: 12px;">Thank you once again for your trust in Brandmeals. We look forward to supporting your success.</p>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding: 40px; font-size: 14px; background-color: #531507; color: #ffffff; border-radius: 0 0 8px 8px;">
                <p style="margin: 0;">&copy; 2024 Brandmeals || All rights reserved.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
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
