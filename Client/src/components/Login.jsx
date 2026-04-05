import React, { useEffect } from "react";
import { assets } from "../assets/assets";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [State, setState] = useState("Login");
  const { setShowLogin, backendUrl, setToken, setUser } =
    useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHansler = async (e) => {
    e.preventDefault(); // this line is used to prevent the default behavior of the form submission, which is to refresh the page. We want to handle the form submission in our own way, so we prevent the default behavior and then we can do whatever we want with the form data, such as making an API call to the backend server to log in or sign up the user.

    //in try catch block we would use state to determine whether the user is trying to log in or sign up and then we would make the appropriate API call to the backend server to log in or sign up the user. We would also handle the response from the backend server and update the state accordingly, such as setting the user data in the context and closing the login modal.
    try {
      if (State == "Login") {
        // make API call to log in the user
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (data.success) {
          setToken(data.token); // this line is used to set the token in the context state. We will use this token to authenticate the user in future API calls to the backend server. We would also store this token in the local storage so that we can persist the user's login state even if they refresh the page or close and reopen the browser.
          setUser(data.user); // this line is used to set the user data in the context state. We will use this data to display the user's information in the UI.
          localStorage.setItem("token", data.token); // this line is used to store the token in the local storage. We will use this token to authenticate the user in future API calls to the backend server. We would also set this token in the context state when the app loads, so that we can persist the user's login state even if they refresh the page or close and reopen the browser.
          setShowLogin(false); // this line is used to close the login form after the user has successfully logged in.
        } else {
          toast.error(data.message); // this line is used to show an error message to the user if the login attempt was unsuccessful. We would use the react-toastify library to show a toast notification with the error message from the backend server. This way, the user can see what went wrong and take appropriate action, such as trying again with the correct credentials or resetting their password.
        }
      } else {
        // make API call to sign up the user
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (data.success) {
          setToken(data.token); // this line is used to set the token in the context state. We will use this token to authenticate the user in future API calls to the backend server. We would also store this token in the local storage so that we can persist the user's login state even if they refresh the page or close and reopen the browser.
          setUser(data.user); // this line is used to set the user data in the context state. We will use this data to display the user's information in the UI.
          localStorage.setItem("token", data.token); // this line is used to store the token in the local storage. We will use this token to authenticate the user in future API calls to the backend server. We would also set this token in the context state when the app loads, so that we can persist the user's login state even if they refresh the page or close and reopen the browser.
          setShowLogin(false); // this line is used to close the login form after the user has successfully signed up.
          toast.success("User registered successfully! Please log in."); // this line is used to show a success message to the user if the sign-up attempt was successful. We would use the react-toastify library to show a toast notification with the success message. This way, the user can see that their account has been created successfully and they can proceed to log in with their new credentials.
          setState("Login"); // this line is used to switch the form back to the login state after a successful sign-up. This way, the user can immediately log in with their new credentials without having to manually switch back to the login form.
        } else {
          toast.error(data.message);
          {
            /* this line is used to show an error message to the user if the sign-up attempt was unsuccessful. We would use the react-toastify library to show a toast notification with the error message fromthe backend server. This way,the user can see what went wrong and take appropriate action, such as trying again with a different email or using a stronger password.*/
          }
        }
      }
    } catch (error) {
      toast.error(error.message); // this line is used to show an error message to the user if there was an error during the API call, such as a network error or a server error. We would use the react-toastify library to show a toast notification with the error message. This way, the user can see that something went wrong and they can try again later or contact support if the issue persists.
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form
        onSubmit={onSubmitHansler} // would calle the handler in this class when we hit enter or click on the button to submit the form
        className="relative bg-white p-10 rounded-lg text-slate-500 "
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium ">
          {State}
        </h1>
        {State == "Login" && (
          <p className="text-sm text-center py-2 bottom-2">
            welcome back! Please sign in to continue
          </p>
        )}
        {State !== "Login" && (
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
            <img
              flex-inline
              height={20}
              width={20}
              src={assets.user_icon}
              alt=""
            />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name} // this line is used to set the value of the input field to the name state variable. This is called a controlled component in React, where the value of the input field is controlled by the state of the component. Whenever the user types something in the input field, the onChange event is triggered and the setName function is called to update the name state variable with the new value. This way, we can keep track of what the user has entered in the input field and use it later when we submit the form.
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>
        )}
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
          <img src={assets.email_icon} alt="" />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email} // this line is used to set the value of the input field to the name state variable. This is called a controlled component in React, where the value of the input field is controlled by the state of the component. Whenever the user types something in the input field, the onChange event is triggered and the setName function is called to update the name state variable with the new value. This way, we can keep track of what the user has entered in the input field and use it later when we submit the form.
            type="text"
            placeholder="Email"
            required
          />
        </div>
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
          <img src={assets.lock_icon} alt="" />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password} // this line is used to set the value of the input field to the name state variable. This is called a controlled component in React, where the value of the input field is controlled by the state of the component. Whenever the user types something in the input field, the onChange event is triggered and the setName function is called to update the name state variable with the new value. This way, we can keep track of what the user has entered in the input field and use it later when we submit the form.
            type="text"
            placeholder="Password"
            required
          />
        </div>
        <p className="text-sm text-blue-600 my-4 cursor-pointer">
          Forgot Password?
        </p>

        <button
          className="bg-black flex items-center 
      gap-2 px-10 py-2 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-500"
        >
          {State == "Login" ? "Login" : "Sign Up"}
        </button>
        {State == "Login" ? (
          <p className="text-sm text-gray-600 mt-5 cursor-pointer text-center">
            Don't have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Sign up
            </span>
          </p>
        ) : (
          <p className="text-sm text-gray-600 mt-5 cursor-pointer text-center">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => {
                setState("Login");
              }}
            >
              Login
            </span>
          </p>
        )}
        <img
          onClick={() => {
            setShowLogin(false);
          }}
          src={assets.cross_icon}
          alt=""
          className="absolute top-5 right-5 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Login;
