require("dotenv").config({});
const server = require("./src/server");

const { PORT = "3000" } = process.env;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
