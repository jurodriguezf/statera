import React from "react";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import Input from "../../components/Input/Input";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import DivisorLine from "../../components/Misc/DivisionLine/DivisionLine";

const SignUp = (props) => {
  return (
    <div {...props} className="flex">
      <div className="relative w-full my-auto px-10 md:px-20 sm:w-full">
        <p className="font-youngserif text-sm my-10">
          Already have an account?
          <a href="" className="text-wine">
            Login
          </a>
        </p>
        <p className="font-youngserif text-4xl my-10">Create Account</p>
        <form className="">
          <Input title="Username" />
          <Input title="Email" />
          <div className="flex justify-around">
            <div className="w-3/6">
              <Input title="Password" password />
            </div>
            <div className="w-3/6">
              <Input title="Confirm" password />
            </div>
          </div>
          <div className="w-full flex justify-center my-10">
            <PrimaryButton label="Sign up" className="" />
          </div>
        </form>
        <DivisorLine />
        <GoogleButton label="Continue with Google" />
      </div>
      <div className="relative hidden md:block w-full h-screen ">
      <div className="absolute flex items-center justify-end w-full px-10">
        <img src="logo.png" className="object-scale-down h-24"></img>
        <p className="font-youngserif text-wine text-xl"> Statera</p>
      </div>
        <img src="images/vegetals.jpg" alt="" className="object-cover h-full" />
      </div>
    </div>
  );
};

export default SignUp;
