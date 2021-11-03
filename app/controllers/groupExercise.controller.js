const db = require("../models");

const GroupExercise = db.groupExercise;
const addNewExerciseToGroup = (req, res) => {
  try {
    const {} = req.body;
    const 
  } catch (error) {
    return res
      .status(400)
      .json({ message: "XX - Error sending new exercise to group" });
  }
};
