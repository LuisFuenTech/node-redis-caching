const client = require("./redis.config");

const set = (key, data) => {
  return client.set(key, data);
};

const get = (key) => {
  return client.get(key);
};

const setex = ({ key, seconds, data }) => {
  return client.setex(key, seconds, data);
};

module.exports = { client, set, get, setex };
