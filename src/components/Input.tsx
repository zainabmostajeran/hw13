import * as React from "react";
interface IInputProps {
  value?: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  type?: React.HTMLInputTypeAttribute;
  onChangeHandler?: (_: string) => unknown;
  validator?: (_: string) => string;
}
export const Input: React.FC<IInputProps> = ({
  label,
  placeholder,
  type = "text",
  defaultValue = "",
  onChangeHandler,
  validator,
}) => {
  const [value, setValue] = React.useState<string>(defaultValue);
  const [Error, setError] = React.useState<string>("");

  const onchange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
    if (validator && !validator?.(event.target.value))
    return setError("Error")
    else "" ;
    if (onChangeHandler) onChangeHandler(event.target.value);
  };
  return (
    <div className="flex flex-col">
      {!!label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onchange}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="border-b-2  px-2 py-2 "
      />
    </div>
  );
};