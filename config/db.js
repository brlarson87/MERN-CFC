const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongo_URI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log("Connected to the database");
  } catch (error) {
    console.log("This is the error");
    console.error(error.message);

    process.exit(1);
  }
};

module.exports = connectDB;
