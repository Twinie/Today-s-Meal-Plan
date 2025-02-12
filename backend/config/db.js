import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
// console.log(process.env)

export const connectDB = async() => {
    try{const res = mongoose.connect(process.env.mongoURI);
      console.log(`mongodb connected with server ${process.env.PORT}`)
    }catch(err){
        console.log("mongodb connection failed!");
        console.log(err);
    }
}