const express = require("express");
// require("newrelic");
const cron = require("node-cron");
const shell = require("shelljs");

const app = express();
const port = process.env.PORT || 5000;
const host = "0.0.0.0";
const time = 10;

console.log(`will start in ${time} minutes`);
console.log(`env`, process.env.BROWSERSTACK_APP_ID);
cron.schedule(`*/${time} * * * *`, () => {
    console.log(`running every ${time} minutes`);
    shell.exec("npm run first");
});

app.listen(port, host, error => {
    if (!error) console.log("Server is Successfully Running, and App is listening on port" + port);
    else console.log("Error occurred, server can't start", error);
});

module.exports = app;
