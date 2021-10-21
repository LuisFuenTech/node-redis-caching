const axios = require("axios");
const rickMorthyApiInstance = axios.create({
  baseURL: "https://rickandmortyapi.com/api"
});

const fetchCharacter = async (id) => {
  const { data } = await rickMorthyApiInstance.get(`/character/${id}`);

  return data;
};

const fetchCharacters = async () => {
  const { data } = await rickMorthyApiInstance.get("/character");

  return data;
};

module.exports = { fetchCharacter, fetchCharacters };
