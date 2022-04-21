import Input from "../../components/Input/Input";
import React from "react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import DivisorLine from "../../components/Misc/DivisionLine/DivisionLine";

const Login = (props) => {
  return (
    <div {...props}>
      <div className="my-auto px-20 sm:w-full">
        <div className="flex justify-end">
          <p className="font-youngserif text-sm mt-10">
            Don’t have an account?
            <a href="" className="text-wine">
              Sign up for free
            </a>
          </p>
        </div>
        <p className="font-youngserif text-4xl my-10">Welcome Back</p>
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
