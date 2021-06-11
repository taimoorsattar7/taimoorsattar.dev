const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc")

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

  const apiName = "stripeAPI"
  const apiEndpoint = "/checkout"
  const body = {
    quantity: 1,
    client_reference_id: "UniqueString",
    priceId: "price_1GuxxSBwl4TwghDgsuUB0RGd",
  }
  const session = await API.post(apiName, apiEndpoint, { body })
  return session

  try {
    await transporter.sendMail(msg)
    send({ emailSend: true })
  } catch (err) {
    send({ emailSend: err })
  }
}
