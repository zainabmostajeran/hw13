import * as React from "react";
interface IInputProps {
  value?: string;
  placeholder?: string;
  defaultValue?: string;
  type?: React.HTMLInputTypeAttribute;
  onChangeHandler?: (_: string) => unknown;
  // validator?: (_: string) => string;
  error: string;
}
export const Input: React.FC<IInputProps> = ({
  placeholder,
  type = "text",
  defaultValue = "",
  onChangeHandler,
  // validator,
  error,
}) => {
  const [value, setValue] = React.useState<string>(defaultValue);

  const onchange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
    if (onChangeHandler) onChangeHandler(event.target.value);
  };
  return (
    <div className="space-y-1 ">
      <input
        type={type}
        value={value}
        onChange={onchange}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="border-b-2 w-full px-2 py-2 "
      />
      {!!error && <p className="text-red-500 text-sm font-medium">{error}</p>}
    </div>
  );
};
