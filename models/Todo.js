const mongoose = require("mongoose");
const todoSchema = require("./schemas/todoSchema");

module.exports = mongoose.model("Todo", todoSchema);
