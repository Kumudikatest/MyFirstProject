const my = require('mysql')
exports.handler = async (event) => {
    console.log("subnode");
    console.log(my);
    return {"message": "Successfully executed"};
};