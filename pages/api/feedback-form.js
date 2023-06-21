import nodemailer from 'nodemailer';

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  const body = req.body;

  if (req.method === "POST") {
    try {
      fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=6LfyrmkmAAAAAFELSujDC86AP0F8FQ8jSb-pkFSM&response=${req.body.gRecaptchaToken}`,
      })
          .then((reCaptchaRes) => reCaptchaRes.json())
          .then((reCaptchaRes) => {
            console.log(
                reCaptchaRes,
                "Response from Google reCaptcha verification API"
            );
            if (reCaptchaRes?.score > 0.5) {
              const mailOptions = {
                from: `Экопоролон.рф <${process.env.WEB_MAILER}>`,
                to: process.env.EMAIL_TO.split(','),
                subject: 'Письмо с сайта Экопоролон.рф',
                html: `<h2>Вопрос с сайта</h2>
                  <p>Имя: ${body.name}</p>
                  <p>Email: ${body.email} </p>
                  <p>Сообщение: ${body.message} </p>`
              };

              const transporter = nodemailer.createTransport({
                host: 'smtp.mail.ru',
                port: 465,
                secure: true,
                auth: {
                  user: process.env.WEB_MAILER,
                  pass: process.env.WEB_MAILER_PASSWORD,
                },
              });

              transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                  console.error(err);
                } else {
                  res.status(200).json({
                    status: "success",
                    message: "Поздравляем. Ваше письмо успешно отправлено!",
                  });
                }
              });
            } else {
              res.status(200).json({
                status: "failure",
                message: "Google ReCaptcha Failure",
              });
            }
          });
    } catch (err) {
      res.status(405).json({
        status: "failure",
        message: "Error submitting the enquiry form",
      });
    }
  } else {
    res.status(405);
    res.end();
  }
};
