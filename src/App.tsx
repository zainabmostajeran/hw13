import React from "react";
import { Header } from "./components/header";
import { Input } from "./components/Input";
import { className } from "./utils/classNames";
function App() {
  const [values, setValues] = React.useState<{
    countryName: string;
    Nature: string;
    Address: string;
    code: string;
    Name: string;
    Phone: string;
    email: string;
    Linkedin: string;
    idea: string;
  }>({
    countryName: "",
    Nature: "",
    Address: "",
    code: "",
    Name: "",
    Phone: "",
    email: "",
    Linkedin: "",
    idea: "",
  });
  // const [Error, setError] = React.useState<string>("");
  const inputChangeHandler = (
    inputType:
      | "countryName"
      | "Nature"
      | "Address"
      | "code"
      | "Name"
      | "Phone"
      | "email"
      | "Linkedin"
      | "idea",
    value: string
  ) => {
    setValues({ ...values, [inputType]: value });
    if (!value.trim()) {
      return setError("This field is required.");
    } else setError("");
  };
  const submit = () => {
    console.log(values);
  };
  return (
    <>
     <Header />
    <div className="container mx-auto">
      <div className="container mx-auto px-14 py-9 flex flex-col gap-3">
        <p className="font-bold text-2xl text-center md:text-start">
          contact us
        </p>
        <p className="text-sm text-gray-600 text-center md:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est
          placeat, delectus quod
        </p>
      </div>
      <div className=" block md:flex container mx-auto px-14 md:gap-44">
        <div className="flex w-full  md:w-1/2 flex-col gap-4">
          {/* <form action=""> */}
          <Input
            placeholder="Your country name"
            onChangeHandler={(value) =>
              inputChangeHandler("countryName", value)
            }
            validator={(value) => value?.length >= 5 && /^[a-z]/}
          />
          <p className={className("text-red p-2", !!Error ? "hidden" : "")}>
            your countryName should be 5-16 characters
          </p>
          <Input
            placeholder="Nature of Bussiness"
            onChangeHandler={(value) => inputChangeHandler("Nature", value)}
            validator={(value) => value?.length >= 5 && /^[a-z]/}
          />
          <p className={className("text-red p-2", !!Error ? "hidden" : "")}>
            your Nature of Bussiness should be 8-16 characters
          </p>
          <div className="flex justify-between gap-2">
            <div className="w-1/2 flex flex-col ">
              <Input
                placeholder="Address"
                onChangeHandler={(value) =>
                  inputChangeHandler("Address", value)
                }
                validator={(value) => value?.length >= 8}
              />
              <p className={className("text-red-600", !!Error ? "hidden" : "")}>
                your address should be 8-16 characters
              </p>
            </div>
            <div className="w-1/2 flex flex-col">
              <Input
                placeholder="Postcode"
                onChangeHandler={(value) => inputChangeHandler("code", value)}
                validator={(value) => value?.length >= 8}
              />
              <p className={className("text-red p-2", !!Error ? "hidden" : "")}>
                your Postcode should be 8-16 characters
              </p>
            </div>
          </div>
          <Input
            placeholder="Contact name"
            onChangeHandler={(value) => inputChangeHandler("Name", value)}
          />
          <p className={className("text-red p-2", !!Error ? "hidden" : "")}>
            your address should be 8-16 characters
          </p>

          <Input
            placeholder="Contact phone"
            type="tel"
            onChangeHandler={(value) => inputChangeHandler("Phone", value)}
          />
          <p className={className("text-red p-2", !!Error ? "hidden" : "")}>
            your address should be 8-16 characters
          </p>

          <Input
            placeholder="Email"
            type="mail"
            onChangeHandler={(value) => inputChangeHandler("email", value)}
          />
          <p className={className("text-red p-2", !!Error ? "hidden" : "")}>
            your address should be 8-16 characters
          </p>

          <Input
            placeholder="Linkedin"
            onChangeHandler={(value) => inputChangeHandler("Linkedin", value)}
          />
          <p className={className("text-red p-2", !!Error ? "hidden" : "")}>
            your address should be 8-16 characters
          </p>

          <Input
            placeholder="Lets talk about your idea"
            onChangeHandler={(value) => inputChangeHandler("idea", value)}
          />
          <p className={className("text-red p-2", !!Error ? "hidden" : "")}>
            your address should be 8-16 characters
          </p>
          <div className="file h-[100px] flex item-start justify-center bg-white border border-dashed border-gray-400">
            <div className="parent mx-auto ">
              <div className="file-upload flex gap-2 items-center p-5 relative cursor-pointer">
                <img
                  className="w-12 h-12 opacity-20"
                  src="—Pngtree—file upload icon_4646955.png"
                  alt="upload"
                />
                <p className="mt-2 text-sm text-[#bbcada]">
                  upload additional file
                </p>
                <input
                  className="block w-full h-full absolute top-0 left-0 right-0 opacity-0 bottom-0 cursor-pointer"
                  type="file"
                />
              </div>
            </div>
          </div>
          <button
            onClick={submit}
            disabled={!!Error}
            className="bg-[#0c9e24] rounded-xl text-white text-lg font-semibold py-2  disabled:bg-slate-600"
          >
            Submit
          </button>
          <div className="flex gap-2  items-center ">
            <Input type="checkBox" />
            <p className="text-sm text-gray-600">
              I want to product my date by signing an NDA
            </p>
          </div>
          {/* </form> */}
        </div>
        {/* right */}
        <div className=" mt-5 text-center md:text-start flex w-full md:w-1/2 flex-col md:mt-0 gap-5">
          <div>
            <p className="font-bold text-sm">offices</p>
          </div>
          <div className="text-sm text-gray-600">
            <p>United states</p>
            <p>500 5th Avenue suit 400,NY 10110</p>
          </div>
          <div className="text-sm text-gray-600">
            <p>united kingdom</p>
            <p>High st, Bromeiy BR1 1DN</p>
          </div>
          <div className="text-sm text-gray-600">
            <p>France</p>
            <p>80 avenue des terrories de france,paris</p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-bold text-sm">Foor Quick Inquiries</p>
            <div className="flex justify-center md:justify-start">
              <img src="HW-W13-pdf-09-23-2024_11_57_AM.png" alt="" />
              <p>+44777777777</p>
            </div>
            <div className="flex justify-center md:justify-start">
              <img src="HW-W13-pdf-09-23-2024_11_56_AM.png" alt="" />
              <p>+13333333330</p>
            </div>
          </div>
          <div>
            <p className="font-bold text-sm">
              Would you like to join our newsletter?
            </p>
            <div className="flex mt-5 py-2 gap-4 items-center justify-center md:justify-start">
              <Input placeholder="Email" />
              <button className="bg-[#0c9e24] p-3">
                <img className="w-4" src="icons8-tick.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default App;
