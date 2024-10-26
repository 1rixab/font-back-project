// require("dotenv").config();
import dotenv from "dotenv";
import express from "express";
import ConnectDB from "./db/dbindex.js";
const app = express();

dotenv.config({
  path: "./env",
});

ConnectDB();

// (() => {
//   try {
//     mongoose.connect(`${process.env.MONGODB}/${dbname}`);
//     app.on("error", (error) => {
//       console.log("Error:", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     throw error;
//   }
// })();
