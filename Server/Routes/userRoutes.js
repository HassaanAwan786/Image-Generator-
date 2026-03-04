import express from "express";
import { registerUser, loginUser } from "../controller/userController.js";
import userAuth from "../middlewares/auth.js";
import { userCredit } from "../controller/userController.js";
import errorHandler from "../middlewares/errorHandler.js";


const userRouter = express.Router();

userRouter.post("/register", registerUser); //user controller functionnas argumrnt
userRouter.post("/login", loginUser); // user by using controller functions
userRouter.post('/credits', userAuth, userCredit); // user by using controller functions
export default userRouter;

//http://localhost:4000/api/user/register
//http://localhost:4000/api/user/login.  now after writing api code in the server.js we can test it in the postman and wehn everwe write thid url controller function would run 