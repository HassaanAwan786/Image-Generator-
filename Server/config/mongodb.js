//code to connect the project with mongo db database

import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => { //async function to connect with database and await is used to wait for the database to be connected
    try {
        //connection events when ever database is connected this message will be printed
        mongoose.connection.on("connected", () => {
            console.log("MongoDB connected");
        })
        await mongoose.connect(`${process.env.MONGODB_URI}/ImageGererator`);//getting link from envirnment variable 
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;