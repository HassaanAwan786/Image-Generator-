import jwt from "jsonwebtoken";
import "dotenv/config";

// this file is the middle ware for getting data from the token and comparing it with secret key 

const userAuth = async (req, res, next) => {

    const token = req.headers.authorization;
    if (!token) {
        return res.json({ success: false, message: "Unauthorized login again" });
    }
    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        if (tokenDecode.id) {
            req.body.userId = tokenDecode.id;
        }
        else {
            return res.status(401).json({ success: false, message: "Unauthorized log in again" });
        }
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export default userAuth;
