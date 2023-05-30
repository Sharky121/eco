import nodemailer from 'nodemailer';

export default async (req, res) => {
  const body = req.body;

  console.log('body: ', body);

  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'loginov@cherryline.ru',
      pass: '4xkW7vWpb7zqUhSJeks0',
    },
  });

  const mailOptions = {
    from: 'Экопоролон.рф <loginov@cherryline.ru>',
    to: 'ooo.plastprom@mail.ru, Sharky121@mail.ru',
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
