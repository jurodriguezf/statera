import React, { useState } from "react";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import Input from "../../components/Input/Input";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import DivisorLine from "../../components/Misc/DivisionLine/DivisionLine";
import { Link, useNavigate } from "react-router-dom";
import HomeButtonText from "../../components/HomeButton/HomeButtonText";
import { useForm } from "react-hook-form";
import { postRequest } from "../../api/backend";
import { makeLoginRequest } from "../../api/util";
import ReCAPTCHA from "react-google-recaptcha";

const SignUp = (props) => {
  return (
    <div {...props} className="flex">
      <div className="relative w-full my-auto px-10 md:px-20 sm:w-full">
        <LoginLink />
        <p className="font-youngserif text-4xl my-10">Create an account</p>
        <LoginForm />

      </div>
      <Image />
    </div>
  );


  function Image() {
    return (
      <div className="relative hidden md:block w-full h-screen ">
        <div className="absolute flex items-center justify-end w-full px-10">
          <HomeButtonText />
        </div>
        <img src="images/vegetals.jpg" alt="" className="object-cover h-full" />
      </div>
    );
  }

  function LoginForm() {
    const navigate = useNavigate();
    const { register, handleSubmit, watch } = useForm({
      defaultValues: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        captcha: "",
      },
    });

    const [formWarning, setFormWarning] = useState("");
    const [validateCaptcha, setValidateCaptcha] = useState(false)

  function onChange(value){
      console.log("Captcha value:", value)

      setValidateCaptcha(true)
      value.reset()
  }

    const onSubmit = async (data) => {
      const { email, password, captcha } = data;

      const signUpData = await postRequest(
        "https://stateraun.ml/register",
        data
      );

      

      if (signUpData.status !== "success") {
        return;
      }

      if (await makeLoginRequest({ email, password}, props.setToken)) {
        navigate("/");
      }
    };

    const emptyFieldValidation = (value) => {
      if (value === "") {
        setFormWarning("Fields cannot be empty!");
      } else {
        setFormWarning("");
      }
    };

    return (
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          title="Username"
          register={register("username", {
            required: true,
            validate: emptyFieldValidation,
          })}
        />
        <Input
          type="text"
          title="Email"
          register={register("email", {
            required: true,
            validate: emptyFieldValidation,
          })}
        />
        <div className="flex justify-around">
          <div className="w-3/6">
            <Input
              type="text"
              title="Password"
              password
              register={register("password", {
                required: true,
                validate: emptyFieldValidation,
              })}
            />
          </div>
          <div className="w-3/6">
            <Input
              type="text"
              title="Confirm"
              password
              register={register("confirmPassword", {
                required: true,
                validate: (value) => {
                  if (value === "") {
                    setFormWarning("Password must be confirmed!");
                    return;
                  }
                  if (watch("password") !== value) {
                    setFormWarning("Passwords don't match!");
                  } else if (value !== "") {
                    setFormWarning("");
                  }
                },
              })}
            />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <h3 className="text-center flex font-manrope font-bold text-sm text-wine">
            {formWarning}
          </h3>
        </div>
          <div className="w-full flex justify-center mt-4">
              <ReCAPTCHA
                  sitekey="6Lc0JKIgAAAAABoQv9XjHO4S9dwPKk40YSkGFgDA"
                  onChange={onChange}
                  onExpired={() => {
                      setValidateCaptcha(false)
                  }
                  }
              />

          </div>

        <div className="w-full flex justify-center my-10">
            {validateCaptcha ? <PrimaryButton type="submit" label="Sign up" className="" /> : <div/>}
        </div>
      </form>
    );
  }

  function LoginLink() {
    return (
      <p className="font-youngserif text-sm my-10">
        Already have an account?
        <Link to="/login" className="text-wine px-1">
          Login
        </Link>
      </p>
    );
  }
};

export default SignUp;
