import React from "react";
import signup from "../images/signup_vector.webp";

function Login() {
  return (
    <div>
      <div className="flex justify-center items-center bg-red-400">
        <div>
          <img src={signup} alt="Signup" />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Login;
