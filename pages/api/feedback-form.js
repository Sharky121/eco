import nodemailer from 'nodemailer';

export default async (req, res) => {
  const body = req.body;

  console.log('body: ', body);

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
    // send mail
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  res.status(200).json({ status: "OK" });
}
