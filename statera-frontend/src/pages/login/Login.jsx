import Input from "../../components/Input/Input";
import React from "react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const Login = () => {
  return (
    <div className="flex h-screen">
      
      <div className="my-auto px-20 sm:w-full lg:w-3/6">
        <p className="font-youngserif text-sm my-10">Already have an account? <a href="" className="text-wine">Login</a></p>
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
      </div>
    </div>
  );
};

export default Login;
