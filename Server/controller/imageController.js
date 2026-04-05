import userModel from "../models/userModel";
import creditsModel from "../models/creditsModel";

export const generateImage = async (req, res) => {
  // Implementation for generating image
  try {
    const { userId, prompt } = req.body;
    const user = await userModel.findById(userId);
    if (!user || !prompt) {
      return res
        .status(400)
        .json({ success: false, message: "User and prompt are required" });
    }
    if (user.creditBalance === 0 || user.creditBalance < 0) {
      return res.status(400).json({
        success: false,
        message: "Insufficient credits",
        credit: user.creditBalance,
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
