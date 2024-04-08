import mongoose from "mongoose";
import dotenv from "dotenv"
import { DB_NAME } from "../constants/constants.js";

dotenv.config()

const connectDB = async () => {
    try {
        console.log(`${process.env.MONGODB_URI}/${DB_NAME}`);
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("MongoDB connected !! DB HOST:" + connection.connection.host);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB