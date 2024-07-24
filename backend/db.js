const mongoose = require("mongoose");
const DB =
  "mongodb+srv://raghav:raghav43@dispensary.enftbfb.mongodb.net/?retryWrites=true&w=majority&appName=Dispensary";

const connectToMongo = () => {
  mongoose
    .connect(DB)
    .then(() => {
      console.log("connected to database");
    })
    .catch((err) => {
      console.log("no connection ");
    });
};

module.exports = connectToMongo;
