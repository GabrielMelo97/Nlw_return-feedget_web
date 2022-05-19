import { MailAdapter, SendMailData } from "../mail.adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "41a5dc9d2eeb10",
    pass: "88ebe326e8ff5b"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Gabriel Melo <gabrielm.leite@hotmail.com',
      subject,
      html: body,
    })
  };
}

