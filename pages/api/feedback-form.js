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

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ message: 'Message sent' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending message' });
  }
}
