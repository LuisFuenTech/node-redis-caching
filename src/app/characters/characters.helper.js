const { rickMorthyService } = require("../../services");
const redis = require("../../helpers/redis");

const fetchCharacter = (id) => {
  return rickMorthyService.fetchCharacter(id);
};

const fetchCharacters = () => {
  return rickMorthyService.fetchCharacters();
};

const set = (key, data) => {
  return redis.set(key, data);
};

const setex = ({ key, seconds, data }) => {
  return redis.setex({ key, seconds, data });
};

const get = (key) => {
  return redis.get(key);
};

module.exports = {
  fetchCharacter,
  fetchCharacters,
  set,
  get,
  setex
};
