const AWS = require('aws-sdk');
const sqs = new AWS.SQS();

exports.handler = async (event) => {
    try {
        let data = await sqs.receiveMessage({
            QueueUrl: `https://sqs.${process.env.AWS_DEFAULT_REGION}.amazonaws.com/${process.env.SIGMA_AWS_ACC_ID}/sqs`,
            MaxNumberOfMessages: 1,
            VisibilityTimeout: 30,
            WaitTimeSeconds: 0,
            AttributeNames: ['All']
        }).promise();
        console.log(data);

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};