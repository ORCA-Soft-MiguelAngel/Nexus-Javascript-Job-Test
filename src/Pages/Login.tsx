import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { BiWorld } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { PulseLoader } from "react-spinners";
import { LoginRequest } from "../ApiRoutes/FetchTypes/authTypes";
import useAuth from "../Hooks/useAuth";
import bg from "../Images/login_bg.jpg";

const Login: React.FC = () => {
  //CUSTOM HOOKS & VARIABLES
  const { login } = useAuth();

  //STATES
  //Form values
  const [loginForm, setLoginForm] = useState<LoginRequest>({
    username: "",
    password: "",
  });
  //Loading state
  const [loading, setLoading] = useState<boolean>(false);
  //alert state
  const [showAlert, setShowAlert] = useState<boolean>(false);
  //alert message
  const [alertMessage, setAlertMessage] = useState<string>("Wrong Credentials");

  //HANDLERS
  //Handler when you change inputs
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.currentTarget.id;
    const value = e.currentTarget.value;

    //prevent special characters
    if (value !== "" && !/^[a-zA-Z0-9_]+$/.test(value)) {
      return;
    }

    //prevent username be longer than 10
    if (key === "username" && value.length > 10) {
      return;
    }

    setLoginForm({
      ...loginForm,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  //Handle to close the alert
  const handleCloseAlert = () => setShowAlert(false);

  //handle ENTER Submit
  const handleEnterKeyLogin = (e: any) => {
    if (e.keyCode === 13) {
      handleLogin(e);
    }
  };

  //Handler when you submit the login
  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    //check attempts
    if (failedAttempts(0)) {
      setShowAlert(true);
      setAlertMessage("You have exceeded the maximum number of attempts");
      return;
    }

    setShowAlert(false);
    setLoading(true);

    const result = await login(loginForm);

    if (result) {
      window.location.reload();
    } else {
      if (failedAttempts(1)) {
        //block login
        setAlertMessage("You have exceeded the maximum number of attempts");
      } else {
        setAlertMessage("Wrong Credentials.");
      }
      setShowAlert(true);
      setLoading(false);
    }
  };

  //FUNCTIONS
  //manage the failed attemps in session
  const failedAttempts = (n: number): boolean => {
    const attempts: number = sessionStorage.getItem("attempts")
      ? Number(sessionStorage.getItem("attempts")) + n
      : 1;

    sessionStorage.setItem("attempts", `${attempts}`);

    if (attempts > 3) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="flex max-h-screen">
      <Helmet>
        <title>Courier | Login</title>
      </Helmet>
      {/**first container */}
      <div className="w-full desktop-m:w-1/2 desktop-l:w-5/12">
        <div className="py-12 bg-blue-100 flex justify-center">
          <span className="text-4xl">
            <BiWorld />
          </span>
          <span className="text-3xl text-blue-800 tracking-wide ml-2 font-semibold">
            Courier
          </span>
        </div>
        <div className="mt-10 desktop-l:mt-28 mx-auto px-10 desktop-s:w-3/4">
          <h2
            className="text-center text-4xl text-blue-900 font-display font-semibold desktop-m:text-left desktop-m:text-5xl
                    desktop-m:text-bold"
          >
            Log In
          </h2>
          <form className="mt-12 desktop-m:text-lg">
            <div>
              <label className="font-bold text-gray-700 tracking-wide">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={loginForm.username}
                onChange={handleOnChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mt-8">
              <label className="font-bold text-gray-700 tracking-wide">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={loginForm.password}
                onChange={handleOnChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                onKeyPress={handleEnterKeyLogin}
              />
            </div>

            <div className="mt-10">
              <button
                onClick={handleLogin}
                disabled={loading}
                className="bg-blue-500 text-xl text-gray-100 p-4 w-full rounded-xl tracking-wide"
              >
                {loading ? (
                  <PulseLoader color="#ffffff" />
                ) : (
                  <span>Log In</span>
                )}
              </button>
            </div>
          </form>
          {showAlert && (
            <div
              className="mt-8 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span className="block sm:inline">{alertMessage}</span>
              <span
                className="absolute top-0 bottom-0 right-0 px-4 py-3"
                onClick={handleCloseAlert}
              >
                <FaTimes
                  className="fill-current h-6 w-6 text-red-500"
                  title="Close"
                />
              </span>
            </div>
          )}
        </div>
      </div>
      {/**second container */}
      <div className="hidden desktop-m:block desktop-m:w-1/2 desktop-l:w-7/12">
        <img src={bg} alt="background" className="w-full" />
      </div>
    </div>
  );
};

export default Login;
