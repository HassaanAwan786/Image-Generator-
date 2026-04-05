import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";

const registerUser = async (req, res) => {
  //request and response argument
  try {
    const { name, email, password } = req.body; // When a user fills out a form in React and clicks "Submit," that data is packaged into an HTTP request. req.body is how your backend controller accesses that specific package.

    if (
      !name ||
      !email ||
      !password
    ) //req returned  if any of the field is missing then return error
    {
      return res
        .status(400)
        .json({ success: false, message: "Missing Details" });
    }
    const salt = await bcrypt.genSalt(10); //10 is the number of rounds if increase val more secure but time talking
    const hashPassword = await bcrypt.hash(password, salt); //hashing the password using bcrypt and salt to enhance security. This ensures that even if the database is compromised, the actual passwords remain protected.

    const userData = {
      //creating a userData object that contains the name, email, and hashed password. This object will be used to create a new user in the database.
      name,
      email,
      password: hashPassword,
    };

    const newUser = new userModel(userData); //creating a new instance of the userModel using the userData object. This prepares the data to be saved in the database.
    const user = await newUser.save(); //saving the new user to the database. The save() method is asynchronous, so we use await to wait for the operation to complete before proceeding.
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET); //generating a JSON Web Token (JWT) for the newly registered user. The token includes the user's ID and is signed with a secret key from the environment variables. This token can be used for authentication in subsequent requests.
    res.json({ success: true, token, user: { name: user.name } });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

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
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Password" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.id);
    if (user) {
      res.json({ success: true, user: { name: user.name } });
    } else {
      res.json({ success: false, message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const userCredit = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await userModel.findById(userId);
    if (user) {
      res.json({
        success: true,
        credit: user.creditBalance,
        user: { name: user.name },
      });
    } else {
      res.json({ success: false, message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { registerUser, loginUser, userCredit };
