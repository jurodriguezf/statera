import Input from "../../components/Input/Input";
import React from "react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import DivisorLine from "../../components/Misc/DivisionLine/DivisionLine";
import {Link} from "react-router-dom";

const Login = (props) => {
  return (
    <div {...props} className="flex">
      <div className="relative hidden md:block w-full h-screen object-fill ">
        <div className="absolute flex items-center w-full px-10">
          <img src="logo.png" className="object-cover h-24"></img>
          <p className="font-youngserif text-wine text-xl"> Statera</p>
        </div>
        <img src="images/bag-vegetals.jpg" alt="" className="h-full w-full object-cover" />
      </div>
      <div className="my-auto px-20 w-full">
        <div className="flex justify-end">
          <p className="font-youngserif text-sm mt-10">
            Don’t have an account?
            <Link to="/signUp" className="text-wine px-1">
              Sign up for free
            </Link>
          </p>
        </div>
        <p className="font-youngserif text-4xl my-10">Welcome back!</p>
        <form className="">
          <Input title="Email" />
          <Input title="Password" password />
          <div className="flex justify-end mt-2">
            <a href="" className="font-youngserif text-sm">
              Forgot password?
            </a>
          </div>
          <div className="w-full flex justify-center my-10">
            <PrimaryButton label="Sign in" className="" />
          </div>
        </form>
        <DivisorLine />
        <GoogleButton label="Continue with Google" />
      </div>
    </div>
  );
};

export default Login;
