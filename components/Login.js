import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import logo from "../public/facebook.png";

function Login() {
  return (
    <div className="grid m-20 place-items-center">
      <Image src={logo} height={300} width={300} />
      <h1
        onClick={signIn}
        className="p-5 m-10 bg-blue-500 rounded-full text-white
      text-center cursor-pointer"
      >
        Login with Facebook
      </h1>
    </div>
  );
}

export default Login;
