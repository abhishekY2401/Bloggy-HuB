import React from "react";
import signup from "../images/signup_vector.webp";

function Signup() {
  return (
    <div className="flex justify-center items-center font-semibold h-screen text-center bg-slate-100">
      <div className="flex item-center justify-evenly mt-8 sm:w-3/4 bg-white text-gray-800 rounded-lg">
        <div className="border-r-2 bg-sky-600 p-72"></div>
        <div className="p-40">
          <div>
            <h1 className="font-">Welcome to Bloggying Hub</h1>
            <h2>Create your account</h2>
            <p>
              Already have an account?
              <span>
                <a href="/login">Login</a>
              </span>
            </p>
          </div>
          <div className="flex flex-col">
            <a href="/">Google</a>
            <a href="/">Github</a>
          </div>

          <div className="flex flex-col items-center justify-around">
            <input
              type="username"
              placeholder="enter username.."
              className="p-3 rounded-3xl"
            />
            <input
              type="email"
              placeholder="enter email.."
              className="p-3 rounded-3xl"
            />
            <input
              type="password"
              placeholder="enter password.."
              className="p-3 rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
