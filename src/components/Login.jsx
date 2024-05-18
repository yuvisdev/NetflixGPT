import NavBar from "./NavBar";
import { BG_URL } from "../utils/constant";
import { useState } from "react";

const Login = () => {
  // signIn logic
  const [isSignIn, setIsSignIn] = useState(true);
  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <>
      <NavBar />
      <div className="h-screen w-screen relative grid items-center">
        {/* background image and overlay */}
        <div
          className="absolute top-0 left-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${BG_URL})`,
          }}
        >
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-overlay to-transparent"></div>
        </div>

        {/* form */}
        <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col pt-12 pb-7 px-14 bg-bgForm gap-4 w-[400px]">
          <h1 className="font-medium text-3xl mb-3">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="outline-none bg-transparent text-base border border-slate-500 w-full rounded-sm py-3 px-4 text-slate-200 focus:border focus:border-white ease-in transition-all duration-200"
            ></input>
          )}
          {!isSignIn && (
            <input
              type="number"
              placeholder="Mobile number"
              maxLength={10}
              className="outline-none bg-transparent text-base border border-slate-500 w-full rounded-sm py-3 px-4 text-slate-200 focus:border focus:border-white ease-in transition-all duration-200"
            ></input>
          )}
          <input
            type="text"
            placeholder="Email"
            className="outline-none bg-transparent text-base border border-slate-500 w-full rounded-sm py-3 px-4 text-slate-200 focus:border focus:border-white ease-in transition-all duration-200"
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="outline-none bg-transparent text-base border border-slate-500 w-full  rounded-sm py-3 px-4  text-slate-200 focus:border focus:border-white ease-in transition-all duration-200"
          ></input>
          <button className="bg-primary text-white rounded-md text-base py-2 hover:bg-red-800">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <div className="mt-4 text-slate-200 text-center flex flex-col gap-2 text-base">
            <a href="#" className="hover:underline hover:text-slate-300 ">
              Forget Password ?
            </a>

            {isSignIn ? (
              <p className="text-slate-400">
                New to NetflixGPT?
                <a
                  href="#"
                  className="hover:underline text-white "
                  onClick={handleSignIn}
                >
                  {" "}
                  Sign up now.
                </a>
              </p>
            ) : (
              <p className="text-slate-400">
                Already registered? &nbsp;
                <a
                  href="#"
                  className="underline text-white"
                  onClick={handleSignIn}
                >
                  Sign In
                </a>
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
