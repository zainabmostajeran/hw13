import * as React from "react";
interface IInputProps {
  value?: string;
  placeholder?: string;
  defaultValue?: string;
  type?: React.HTMLInputTypeAttribute;
  onChangeHandler?: (_: string) => unknown;
  error: string;
}
export const Input: React.FC<IInputProps> = ({
  placeholder,
  type = "text",
  defaultValue = "",
  onChangeHandler,
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
        className={` w-full px-2 py-2 ${error?" border-b-2 border-red-600":"border-b-2"} `}
      />
      {!!error && <p className="text-red-500  text-sm font-medium">{error}</p>}
    </div>
  );
};
