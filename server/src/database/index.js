import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );
        console.log(
            `MongoDB is connected at ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.log(`Error on connecting MongoDB ${error}`);
    }
};

export default connectDB;
