const express = require("express");

const {
  getTutorialList,
  addTutorial,
  getTutorial,
} = require("../controller/tutorial.js");

const router = express.Router();

router.get("/tutorials", getTutorialList);

router.post("/tutorial/add", addTutorial);

router.get("/tutorial/:tutorialId", getTutorial);

module.exports = router;
