const nodemailer = require("nodemailer")
const nodemailerSendgrid = require("nodemailer-sendgrid")

exports.handler = async function (event, context, callback) {
  //pull the required information from your environment variables, which can be set in the Netlify UI
  let data = JSON.parse(event.body)

  const transporter = nodemailer.createTransport(
    nodemailerSendgrid({
      apiKey: process.env.SENDGRID_API_KEY,
    })
  )

  if (event.httpMethod == "POST" && event.body == null) {
    send({ emailSend: false })
  }

  // THIS FUNCTION FORMATS AND SENDS YOUR RESPONSE BACK TO YOUR FRONT-END
  const send = body => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body),
    })
  }

  const msg = {
    from: process.env.EMAIL_FROM, // Use the email address or domain you verified above,
    to: data.email,
    subject: data.subject,
    html: data.html,
  }

  try {
    await transporter.sendMail(msg)
    send({ emailSend: true })
  } catch (err) {
    send({ emailSend: err })
  }
}
