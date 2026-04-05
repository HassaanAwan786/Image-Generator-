import userModel from "../models/userModel.js";
import axios from "axios";
import FormData from "form-data";

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
    const formData = new FormData();
    formData.append("prompt", prompt); //first promt is the key and second is the value of the key which is coming from the req.body
    const { data } = await axios.post(
      "https://api.clipdrop.com/image-upscaler/v1",
      formData,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer",
      },
    );
    const base64Image = Buffer.from(data, "binary").toString("base64"); //The AI sends back a "blob" of raw data that humans (and browsers) can't read.Buffer.from(data, "binary") takes those raw bytes..toString("base64") turns those bytes into a Base64 String (a long string of random-looking text like iVBORw0KGgo...). This string represents the image in text form.
    const resultImage = `data:image/png;base64,${base64Image}`; //This creates a Data URI. It adds a prefix telling the browser: "Hey, the text following this is actually a PNG image."

    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    }); //decrementing the credit balance by 1 for each image generation.

    res.json({
      success: true,
      image: resultImage,
      credit: user.creditBalance - 1,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
