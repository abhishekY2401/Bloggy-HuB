import React from "react";
import signup from "../images/signup_vector.webp";

function Signup() {
  return (
    <div className="flex column-flex justify-center items-center bg-blue-500 text-white font-semibold text-center">
      <div className="bg-white text-gray-800 max-w-4xl">
        <h2>Get Started.</h2>
        <p>
          Already have an account?
          <span>
            <a href="/login">Login</a>
          </span>
        </p>
        <div>
          <button>Google</button>
          <button>Github</button>
        </div>

        <div className="flex items-center justify-around p-48">
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
  );
}

export default Signup;
