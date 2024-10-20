import { Injectable } from '@nestjs/common';
import nodemailer from "nodemailer";

@Injectable()
export class NodemailerService {

  static async sendPasswordResetEmail(email: string, name: string, checkLink: string) {
    try {
      //let {recipient, subject, text, html, } = req.body;
      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.NODEMAILER_USER,
          pass: process.env.NODEMAILER_PASSWORD,
        },
      });

      console.log(checkLink);
      const info = await transporter.sendMail({
        from: "process.env.EMAIL@gmaiil.com",
        to: 'manuelcitosad@gmail.com',
        subject: 'subject',
        text: 'text',
        html: 'html'
      });

      console.log("Message sent: %s", info.messageId);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
}
