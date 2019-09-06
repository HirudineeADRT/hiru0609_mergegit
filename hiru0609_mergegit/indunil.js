let AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = function (event, context, callback) {
    console.log("add new JSFFile & add new line by indunil: edit this this line");
    // comment by indunil 
    // test indunil line block 
    ses.sendEmail({
        Destination: {
            ToAddresses: ['indunil@adroitlogic.com'],
            CcAddresses: [],
            BccAddresses: []
        },
        Message: {
            Body: {
                Text: {
                    Data: `test ses add Re`
                }
            },
            Subject: {
                Data: 'test ses add Resource'
            }
        },
        Source: 'indunil@adroitlogic.com',
    }, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
    });

    callback(null, { "message": "Successfully executed" });
}