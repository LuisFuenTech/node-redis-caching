const express = require("express");
const responseTime = require("response-time");

const routes = require("./routes");
require("./helpers/redis");

const app = express();

app.use(responseTime());
app.use("/api/v1", routes);

module.exports = app;
