const express = require("express");
const cron = require("node-cron");
const shell = require("shelljs");

const app = express();
const port = process.env.PORT || 3000;
const host = "0.0.0.0";

cron.schedule("*/20 * * * *", () => {
    console.log("running every 20 minutes");
    shell.exec("npm run first");
});

app.listen(port, host, error => {
    if (!error) console.log("Server is Successfully Running, and App is listening on port " + port);
    else console.log("Error occurred, server can't start", error);
});

module.exports = app;
