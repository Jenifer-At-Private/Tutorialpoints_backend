const Tutorial = require("../model/tutorial.js");

const getTutorialList = (req, res) => {
  Tutorial.find({}, { _id: 1, title: 1 }, (err, tutorial) => {
    if (err) {
      return res.status(400).json({
        error:
          "Cannot able to fetch the tutorial list. Please try again later.",
      });
    }

    console.log(tutorial);
    return res.status(200).json(tutorial);
  });
};

const addTutorial = (req, res) => {
  let tutorial = new Tutorial(req.body);

  tutorial
    .save()
    .then((data) => {
      console.log(data);
      return res.status(200).json({
        message: "Tutorial added success fully.",
      });
    })
    .catch((err) => {
      return res.json({
        error: "Cannot able to add new tutorial",
      });
    });
};

const getTutorial = (req, res) => {
  const { tutorialId } = req.params;

  Tutorial.findOne({ _id: tutorialId }, (err, tutorial) => {
    if (err) {
      return res.status(400).json({
        error: "Cannot able to fetch the tutorial",
      });
    }

    return res.status(200).json(tutorial);
  });
};

module.exports = { getTutorialList, addTutorial, getTutorial };
