// IMPORT THE AIRTABLE.JS PACKAGE
const Airtable = require('airtable');
var validator = require('validator');

/** THIS IS YOUR SERVERLESS FUNCTION */
exports.handler = function(event, context, callback) {
  //pull the required information from your environment variables, which can be set in the Netlify UI
  const { API_CLIENT_ID, API_KEY } = process.env;

  // THIS FUNCTION FORMATS AND SENDS YOUR RESPONSE BACK TO YOUR FRONT-END
  const send = body => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body)
    });
  }

  // CONFIGURE YOUR AIRTABLE BASE CONNECTION
  Airtable.configure({
    apiKey: API_KEY
  });


  var base = Airtable.base(API_CLIENT_ID);
  const table = base("table 1")

  if (event.httpMethod == "POST" && event.body == null){
    send({
      data: ""
    });  
  }
  let JSONdata = JSON.parse(event.body);

  if (!validator.isEmail(JSONdata.email)){
    send({
      data: ""
    });  
  }else{
    table.create([
      {
        "fields": {
          "Name": JSONdata.name,
          "Email": JSONdata.email,
          "Date": new Date
        }
      },
  
    ], function(err, records) {
      if (err) {
          send(err);
      }else{
        records.forEach(function (record) {
            send({
              data: record.getId()
            });
        });
      }
      
    });
  }  
}