const { default: mongoose } = require("mongoose");

mongoose.set('strictQuery', false);
const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected Successfully")
  } catch (error) {
    // throw new Error(error);
    console.log("database error");
  }
};
module.exports = dbConnect;
