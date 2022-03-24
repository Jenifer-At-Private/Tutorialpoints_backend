const mongoose = require("mongoose");

const TutorialSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  sections: {
    type: Array,
  },
});

const Tutorial = mongoose.model("Tutorial", TutorialSchema);

module.exports = Tutorial;

// {
//     title: "",
//     description: "",
//     sections: [
//         {
//             id: "",
//             title: "",
//             subsection: [
//                 {
//                     id: "",
//                     title: "",
//                     description: "",
//                 }

//             ]
//         }
//     ]
// }
