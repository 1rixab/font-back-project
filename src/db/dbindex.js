import mongoose from "mongoose";
import { dbname } from "../constants.js";

const ConnectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB}/${dbname}`
    );
    console.log(
      `\n MongoDB connected !! DB Host ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Mongodb connect error ", error);
    process.exit(1);
  }
};

export default ConnectDB;
