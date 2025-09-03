import React from "react";
import { assets } from "../assets/assets";

const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Create AI Images
      </h1>
      <p className="text AI Images mb-6 ">Turn your imagination into reality</p>
      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="w-80 xl:w-96 rounded-lg"
        />
        <div>
          <h2 className="text-3xl font-medium max-w-lg mb-4">
            Introducing th eAI-Powered Text to Image Generator
          </h2>
          <p className="text-gray-600 mb-4">
            Experience the future of creativity with our cutting-edge AI-powered
            text to image generator. Transform your words into stunning visuals
            in seconds. Whether you're a designer, marketer, or simply looking
            to bring your ideas to life, our tool makes it easy and fun. Try it
            now and unleash your imagination!
          </p>
          <p className="text-gray-600 mb-4">
            simply type a description of the image you want, and our advanced AI
            technology will generate a high-quality image that matches your
            vision. It's fast, easy, and free to use. Start creating today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
