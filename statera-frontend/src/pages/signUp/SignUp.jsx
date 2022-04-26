import React from "react";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import Input from "../../components/Input/Input";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import DivisorLine from "../../components/Misc/DivisionLine/DivisionLine";
import {Link} from "react-router-dom";
import HomeButtonText from "../../components/HomeButton/HomeButtonText";

const SignUp = (props) => {
  return (
    <div {...props} className="flex">
      <div className="relative w-full my-auto px-10 md:px-20 sm:w-full">
        <LoginLink/>
        <p className="font-youngserif text-4xl my-10">Create an account</p>
        <LoginForm/>
        <DivisorLine />
        <GoogleButton label="Continue with Google" />
      </div>
      <Image/>
    </div>
  );

  function Image() {
    return <div className="relative hidden md:block w-full h-screen ">
      <div className="absolute flex items-center justify-end w-full px-10">
        <HomeButtonText/>
      </div>
      <img src="images/vegetals.jpg" alt="" className="object-cover h-full" />
    </div>;
  }

  function LoginForm() {
    return <form className="">
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
    </form>;
  }

  function LoginLink() {
    return <p className="font-youngserif text-sm my-10">
      Already have an account?
      <Link to="/login" className="text-wine px-1">
        Login
      </Link>
    </p>;
  }
};

export default SignUp;
