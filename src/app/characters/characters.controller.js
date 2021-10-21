const helper = require("./characters.helper");
const KEY = "CHARACTERS";
const { SECONDS_IN_HOUR = 1 * 60 * 60 } = process.env;

const getCharacter = async (req, res) => {
  try {
    const { id } = req.params;

    const cachedCharacter = await helper.get(`${KEY}:${id}`);

    if (cachedCharacter) {
      return res.status(200).send({ data: JSON.parse(cachedCharacter) });
    }

    const data = await helper.fetchCharacter(id);

    await helper.setex({
      key: `${KEY}:${id}`,
      seconds: SECONDS_IN_HOUR,
      data: JSON.stringify(data)
    });

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error.response.data || error);
  }
};

const getCharacters = async (req, res) => {
  try {
    const cachedCharacters = await helper.get(KEY);

    if (cachedCharacters) {
      return res.status(200).send({ data: JSON.parse(cachedCharacters) });
    }

    const data = await helper.fetchCharacters();

    await helper.setex({
      key: KEY,
      seconds: SECONDS_IN_HOUR,
      data: JSON.stringify(data)
    });

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error.response.data || error);
  }
};

module.exports = { getCharacter, getCharacters };
