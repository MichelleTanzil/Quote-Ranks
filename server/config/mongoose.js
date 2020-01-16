const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
mongoose.connect("mongodb://localhost/quote_ranks_final", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
require("../models/quote")

