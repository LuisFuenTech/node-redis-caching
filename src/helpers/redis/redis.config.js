const Redis = require("ioredis");

const { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } = process.env;

let client = null;

if (client === null) {
  client = new Redis({
    host: REDIS_HOST,
    port: Number.parseInt(REDIS_PORT),
    password: REDIS_PASSWORD
  });
}

client.on("error", function (error) {
  console.error({ error });
});

client.on("connect", function () {
  console.log("Connected to redis");
});

module.exports = client;
