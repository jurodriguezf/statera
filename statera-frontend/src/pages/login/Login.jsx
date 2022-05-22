import Input from "../../components/Input/Input";
import React from "react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import DivisorLine from "../../components/Misc/DivisionLine/DivisionLine";
import {Link, useNavigate} from "react-router-dom";
import HomeButtonText from "../../components/HomeButton/HomeButtonText";
import {useForm} from "react-hook-form";
import {makeLoginRequest} from "../../api/util";

const Login = (props) => {
  return (
    <div {...props} className="flex">
      <Image/>
      <div className="my-auto px-20 w-full">
        <SignUpLink/>
        <p className="font-youngserif text-4xl my-10">Welcome back!</p>
        <LoginForm/>
        <DivisorLine/>
        <GoogleButton label="Continue with Google"/>
      </div>
    </div>
  );

  function LoginForm() {
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm({
      defaultValues: {
        email: '',
        password: '',
      }
    })

    const onSubmit = async (data) => {
      await makeLoginRequest(data, props.setToken).then((response) => {
        if(response){
          navigate("/");
        }
      });
    }

    return <form className="" onSubmit={handleSubmit(onSubmit)}>
      <Input type="text" title="Email" register={register("email")}/>
      <Input type="text" title="Password" password register={register("password")}/>
      <div className="flex justify-end mt-2">
        <a href="" className="font-youngserif text-sm">
          Forgot password?
        </a>
      </div>
      <div className="w-full flex justify-center my-10">
        <PrimaryButton type="submit" label="Sign in" className=""/>
      </div>
    </form>;
  }

  function SignUpLink() {
    return <div className="flex justify-end">
      <p className="font-youngserif text-sm mt-10">
        Don’t have an account?
        <Link to="/signUp" className="text-wine px-1">
          Sign up for free
        </Link>
      </p>
    </div>;
  }

  function Image() {
    return <div className="relative hidden md:block w-full h-screen object-fill ">
      <div className="absolute flex items-center w-full px-10">
        <HomeButtonText/>
      </div>
      <img src="images/bag-vegetals.jpg" alt="" className="h-full w-full object-cover"/>
    </div>;
  }
};

export default Login;
