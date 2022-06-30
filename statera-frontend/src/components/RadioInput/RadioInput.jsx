const RadioInput = (props) => {
  return (
    <div className={`${props.className} `}>
        <label className="flex items-center p-5 m-3 hover:bg-gray-button checked:bg-darkwine rounded-lg font-manrope font-medium">
          <input
            className="mx-2"
            type="radio"
            id={props.id}
            name={props.name}
            value={props.value}
            {...props.register}
          />
          {props.label}
        </label>
    </div>
  );
};

export default RadioInput;
