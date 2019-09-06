let AWS = require('aws-sdk');
let SL_AWS = require('slappforge-sdk-aws');
const sqs = new SL_AWS.SQS(AWS);

exports.handler = function (event, context, callback) {
    //hiruidnee
    //hiru002
    sqs.receiveMessage({
        QueueUrl: `https://sqs.${process.env.AWS_REGION}.amazonaws.com/${process.env.SIGMA_AWS_ACC_ID}/KTestSQS`,
        AttributeNames: ['MessageGroupId'],
        MaxNumberOfMessages: '100',
        VisibilityTimeout: '30',
        WaitTimeSeconds: '0',
        MessageAttributeNames: ['test']
    }).promise()
        .then(receivedMsgData => {
            if (!!(receivedMsgData) && !!(receivedMsgData.Messages)) {
                let receivedMessages = receivedMsgData.Messages;
                receivedMessages.forEach(message => {
                    // your logic to access each message through out the loop. Each message is available under variable message 
                    // within this block
                });
            } else {
                // No messages to process
            }
        })
        .catch(err => {
            // error handling goes here
        });

}