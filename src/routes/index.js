const mainRouter = require("express").Router();
const characterRoutes = require("../app/characters");

mainRouter.use("/characters", characterRoutes);

module.exports = mainRouter;
