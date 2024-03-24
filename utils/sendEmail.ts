import nodemailer from "nodemailer";
//test
export const sendEmail = async (
  toEmail: string,
  token: string,
  name: string
) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: '"my-app" <jaison.john@ileafsolutions.com>', // sender address
    to: toEmail, // list of receivers
    subject: "Hello", // Subject line
    text: "Hello world?", // plain text body
    html: `<div><h2>Hi ${name}</h2><h4>${token}</h4></div>`, // html body
  });

  console.log("**", info);
};
