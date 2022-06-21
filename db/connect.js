const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    // removes deprecation warnings from console
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
