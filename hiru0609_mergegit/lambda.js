let AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = function (event, context, callback) {
    s3.listObjects({
        'Bucket': 'as2-test-lahiru',
        'MaxKeys': 10,
        'Prefix': '1'
    }).promise()
        .then(data => {
            console.log(data);
            callback(null, { "message": "Successfully executed 123" });           // successful response
            /*
            data = {
                Contents: [
                    {
                       ETag: "\"70ee1738b6b21e2c8a43f3a5ab0eee71\"",
                       Key: "example1.jpg",
                       LastModified: "<Date Representation>",
                       Owner: {
                          DisplayName: "myname",
                          ID: "12345example25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
                       },
                       Size: 11,
                       StorageClass: "STANDARD"
                    },
                    // {...}
                ]
            }
            */
        })
        .catch(err => {
            console.log(err, err.stack);
            callback(null, { "message": "an error occured" }); // an error occurred
        });


}