import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js"; //path of mongodb.js file
import userRouter from "./Routes/userRoutes.js";
import imageRouter from "./Routes/imageRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

//add port number where we would run our exprees app
const Port = process.env.PORT || 4000; //if port is not  in env then it will run on 4000

const app = express();

app.use(express.json()); //we are using express.json() to parse the json data
app.use(cors()); //we are using cors to allow cross origin requests

await connectDB(); //calling the connectDB function to connect with the database

app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);
app.get("/", (req, res) => res.send("API working"));

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
