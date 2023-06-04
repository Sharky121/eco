import nodemailer from 'nodemailer';
import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res, recaptchaToken) => {
  const body = req.body;

  const response = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      null,
      {
        params: {
          secret: '6LfyrmkmAAAAAFELSujDC86AP0F8FQ8jSb-pkFSM',
          response: recaptchaToken,
        },
      }
  );

  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: process.env.WEB_MAILER,
      pass: process.env.WEB_MAILER_PASSWORD,
    },
  });

  const mailOptions = {
    from: `Экопоролон.рф <${process.env.WEB_MAILER}>`,
    to: process.env.EMAIL_TO,
    subject: 'Письмо с сайта Экопоролон.рф',
    html: `<h2>Вопрос с сайта</h2>
      <p>Имя: ${body.name}</p>
      <p>Email: ${body.email} </p>
      <p>Сообщение: ${body.message} </p>`
  };

  await new Promise((resolve, reject) => {
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        if (response) {
          resolve(info);
        } else {
          console.error(err);
          reject(err);
        }
      }
    });
  });

  res.status(200).json({ status: "OK" });
}
