const AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();
const my = require('mysql')

exports.handler = async (event) => {
    debugger;
    try {
        let data = await cognito_idp.listUsers({
            UserPoolId: "us-east-1_jfB99rZCt",
            Limit: 10
        }).promise();
        console.log("rootnode");
        console.log(my);

    } catch (err) {
        console.log(err);
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};