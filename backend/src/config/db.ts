import mongoose from "mongoose";

const dbConnect = () => {
  try {
    mongoose.connect(process.env.MONGO_URL as string);
    console.log("Connect Database");
  } catch (error) {
    console.log(`db connection error ${error}`);
  }
};

export default dbConnect;
