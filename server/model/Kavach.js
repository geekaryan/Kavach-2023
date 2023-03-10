const mongoose = require("mongoose");

const kavachSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    unique: true,
  },
});

const kavach = mongoose.model("kavach", kavachSchema);

module.exports = kavach;
