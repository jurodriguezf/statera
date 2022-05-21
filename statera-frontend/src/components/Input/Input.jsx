import {useState} from "react";
import {BsFillEyeSlashFill, BsFillEyeFill} from "react-icons/bs";

const Input = (props) => {
  const [visibility, setVisibility] = useState(true);

  return (
    <div className="">
      <div className="font-manrope font-bold text-sm py-2 px-2">{props.title}</div>
      <div className="flex items-center px-2">
        <input
          type={props.password ? (visibility ? "password" : "text") : "text"}
          placeholder={props.placeholder}
          className="input-type"
          onChange={props.onChange}
          {...props.register}
        />
        {props.password ? (
          visibility ? (
            <BsFillEyeSlashFill
              className="-mx-7 cursor-pointer"
              onClick={() => setVisibility(false)}
            />

          ) : (
            <BsFillEyeFill
              className="-mx-7 cursor-pointer"
              onClick={() => setVisibility(true)}
            />
          )
        ) : (
          <div/>
        )}
      </div>
    </div>
  );
};

export default Input;
