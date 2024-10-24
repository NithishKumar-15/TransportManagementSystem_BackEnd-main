import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoDbCloud = process.env.MONGODBATLASCLUSTER;

const dbConnection = async () => {
    try {
        await mongoose.connect(mongoDbCloud);
        console.log('db connected successful')
    } catch (e) {
        console.log('db connection failed ' + e);
        process.exit(1);
    }
}

export default dbConnection;