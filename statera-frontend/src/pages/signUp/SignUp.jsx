import React from "react";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import Input from "../../components/Input/Input";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import DivisorLine from "../../components/Misc/DivisionLine/DivisionLine";
import {Link, useNavigate} from "react-router-dom";
import HomeButtonText from "../../components/HomeButton/HomeButtonText";
import {useForm} from "react-hook-form";
import {postRequest} from "../../api/backend";
import {makeLoginRequest} from "../../api/util";

const SignUp = (props) => {
  return (
    <div {...props} className="flex">
      <div className="relative w-full my-auto px-10 md:px-20 sm:w-full">
        <LoginLink/>
        <p className="font-youngserif text-4xl my-10">Create an account</p>
        <LoginForm/>
        <DivisorLine/>
        <GoogleButton label="Continue with Google"/>
      </div>
      <Image/>
    </div>
  );

  function Image() {
    return <div className="relative hidden md:block w-full h-screen ">
      <div className="absolute flex items-center justify-end w-full px-10">
        <HomeButtonText/>
      </div>
      <img src="images/vegetals.jpg" alt="" className="object-cover h-full"/>
    </div>;
  }

  function LoginForm() {
    const navigate = useNavigate();
    const {register, handleSubmit, watch} = useForm({
      defaultValues: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    })

    const onSubmit = async (data) => {
      const { email, password } = data;

      const signUpData = await postRequest("http://localhost:8080/register", data);

      if(signUpData.status !== "success"){
        return;
      }

      if (await makeLoginRequest({email, password}, props.setToken)) {
        navigate("/");
      }
    }

    return <form className="" onSubmit={handleSubmit(onSubmit)}>

      <Input title="Username" register={register("username")}/>
      <Input title="Email" register={register("email")}/>
      <div className="flex justify-around">
        <div className="w-3/6">
          <Input title="Password" password register={register("password")}/>
        </div>
        <div className="w-3/6">
          <Input title="Confirm" password register={register("confirmPassword", {
            required: true,
            validate: (value => watch("password") !== value ? "Passwords don't match" : null)
          })}/>
        </div>
      </div>
      <div className="w-full flex justify-center my-10">
        <PrimaryButton type="submit" label="Sign up" className=""/>
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
