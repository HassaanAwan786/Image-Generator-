import express from "express";
import { generateImage } from "../controller/imageController.js";
import userAuth from "../middlewares/auth.js";

const imageRouter = express.Router();

imageRouter.post("/generate-image", userAuth, generateImage); // this is the route for generating image and we are using the userAuth middleware to check if the user is authenticated before allowing them to generate an image. The generateImage function is the controller function that will handle the logic for generating the image.

export default imageRouter;
