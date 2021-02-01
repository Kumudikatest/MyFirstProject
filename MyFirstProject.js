const AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
    debugger;
    try {
        let data = await cognito_idp.listUsers({
            UserPoolId: "us-east-1_jfB99rZCt",
            Limit: 10
        }).promise();

        console.log(data);

    } catch (err) {
        // error handling goes here
        console.log(err);

    };

    return { "message": "Successfully executed" };
};