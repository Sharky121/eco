import nodemailer from 'nodemailer';

export default function handler(req, res) {
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

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  if (!body.name || !body.email || !body.message) {
    return res.status(400).json({ data: 'Произошла ошибка' });
  }

  res.status(200).json({ data: `Ваше сообщение отправлено!`});
}
