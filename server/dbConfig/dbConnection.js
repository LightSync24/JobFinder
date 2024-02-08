import mongoose from "mongoose";
import dotenv from "dotenv";

const dbConnection = async () => {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to the DB");
  } catch (error) {
    console.log("DB Error: " + error.message);
  }
};

export default dbConnection;
