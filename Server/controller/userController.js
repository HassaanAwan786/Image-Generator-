import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";


const registerUser = async (req, res) => {//request and response argument
    try {
        const { name, email, password } = req.body; // 

        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "Missing Details" });
        }
        const salt = await bcrypt.genSalt(10); //10 is the number of rounds if inc val more secure but time talking
        const hashPassword = await bcrypt.hash(password, salt);

        const userData = {
            name,
            email,
            password: hashPassword,
        }
        const newUser = new userModel(userData)
        const user = await newUser.save();
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({ success: true, token, user: { name: user.name } })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            res.json({ success: true, token, user: { name: user.name } });
        }
        else {
            return res.status(401).json({ success: false, message: "Invalid Password" });
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }
}

const getUser = async (req, res) => {
    try {
        const user = await userModel.findById(req.body.id);
        if (user) {
            res.json({ success: true, user: { name: user.name } });
        }
        else {
            res.json({ success: false, message: "User not found" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

const userCredit = async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await userModel.findById(userId);
        if (user) {
            res.json({ success: true, credit: user.creditBalance, user: { name: user.name } });
        }
        else {
            res.json({ success: false, message: "User not found" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export { registerUser, loginUser, userCredit }