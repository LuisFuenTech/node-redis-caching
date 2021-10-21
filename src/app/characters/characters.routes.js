const router = require("express").Router();
const characterController = require("./characters.controller");

router.get("/", characterController.getCharacters);
router.get("/:id", characterController.getCharacter);

module.exports = router;
