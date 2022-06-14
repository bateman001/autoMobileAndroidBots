const express = require("express");
const cron = require("node-cron");
const shell = require("shelljs");

const app = express();
const PORT = 3000;

cron.schedule("*/30 * * * *", () => {
    console.log("running every 5 minutes");
    shell.exec("npm run first");
});

app.listen(PORT, error => {
    if (!error) console.log("Server is Successfully Running, and App is listening on port " + PORT);
    else console.log("Error occurred, server can't start", error);
});

module.exports = app;
