import React from "react";
import { Header } from "./components/header";
import { Input } from "./components/Input";

function App() {
  const [firstTimeLoading, setFirstTimeLoading] = React.useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

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

  interface IValuesType<T = string> {
    countryName: T;
    Nature: T;
    Address: T;
    code: T;
    Name: T;
    Phone: T;
    email: T;
    Linkedin: T;
    idea: T;
  }

  type validatorFunc = (_: string) => string | null;

  const validator: IValuesType<validatorFunc> = {
    countryName: (value: string) => {
      return value?.length >= 5 && value?.length <= 16
        ? null
        : "Country name should be 5-16 characters";
    },
    Nature: (value: string) => {
      return value?.length >= 8 && value?.length <= 16
        ? null
        : "Nature of business should be 8-16 characters";
    },
    Address: (value: string) => {
      return value?.length >= 8 && value?.length <= 16
        ? null
        : "Address should be 8-16 characters";
    },
    code: (value: string) => {
      return Number(value) > 0 ? null : "Postcode should be a positive number";
    },
    Name: (value: string) => {
      return value.length >= 5
        ? null
        : "Contact name should be more than 5 characters";
    },
    Phone: (value: string) => {
      return Number(value) > 0
        ? null
        : "Contact Phone number should be a positive number";
    },
    email: (value: string) => {
      return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? null
        : "Invalid email address";
    },
    Linkedin: (value: string) => {
      return /^https?:\/\/(www\.)?linkedin\.com/i.test(value)
        ? null
        : "Invalid LinkedIn URL";
    },
    idea: (value: string) => {
      return value.length >= 10
        ? null
        : "Idea should be at least 10 characters long";
    },
  };
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
  };
  const [errors, setErrors] = React.useState<IValuesType>({
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
  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (Object.values(errors).some((error) => error.length > 0)) return;
    setIsSubmitting(true);
    console.log(values);
  };
  React.useEffect(() => {
    if (firstTimeLoading) {
      setFirstTimeLoading(false);
      return;
    }
    const newErrors = { ...errors };
    const countryNameError = validator.countryName(values.countryName);
    newErrors.countryName = countryNameError || "";
    const NatureError = validator.Nature(values.Nature);
    newErrors.Nature = NatureError || "";
    const AddressError = validator.Address(values.Address);
    newErrors.Address = AddressError || "";
    const codeError = validator.code(values.code);
    newErrors.code = codeError || "";
    const NameError = validator.Name(values.Name);
    newErrors.Name = NameError || "";
    const PhoneError = validator.Phone(values.Phone);
    newErrors.Phone = PhoneError || "";
    const emailError = validator.email(values.email);
    newErrors.email = emailError || "";
    const LinkedinError = validator.Linkedin(values.Linkedin);
    newErrors.Linkedin = LinkedinError || "";
    const ideaError = validator.idea(values.idea);
    newErrors.idea = ideaError || "";

    setErrors(newErrors);
  }, [values]);
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
            <form onSubmit={onSubmitHandler}>
              <div className="space-y-4 ">
                <Input
                  placeholder="Your country name"
                  onChangeHandler={(value) =>
                    inputChangeHandler("countryName", value)
                  }
                  error={errors.countryName}
                />
                <Input
                  placeholder="Nature of Bussiness"
                  onChangeHandler={(value) =>
                    inputChangeHandler("Nature", value)
                  }
                  error={errors.Nature}
                />
                <div className="flex justify-between gap-2">
                  <div className="w-1/2 flex flex-col ">
                    <Input
                      placeholder="Address"
                      onChangeHandler={(value) =>
                        inputChangeHandler("Address", value)
                      }
                      error={errors.Address}
                    />
                  </div>
                  <div className="w-1/2 flex flex-col">
                    <Input
                      placeholder="Postcode"
                      onChangeHandler={(value) =>
                        inputChangeHandler("code", value)
                      }
                      error={errors.code}
                    />
                  </div>
                </div>
                <Input
                  placeholder="Contact name"
                  onChangeHandler={(value) => inputChangeHandler("Name", value)}
                  error={errors.Name}
                />
                <Input
                  placeholder="Contact phone"
                  type="text"
                  onChangeHandler={(value) =>
                    inputChangeHandler("Phone", value)
                  }
                  error={errors.Phone}
                />
                <Input
                  placeholder="Email"
                  type="text"
                  onChangeHandler={(value) =>
                    inputChangeHandler("email", value)
                  }
                  error={errors.email}
                />
                <Input
                  placeholder="Linkedin"
                  onChangeHandler={(value) =>
                    inputChangeHandler("Linkedin", value)
                  }
                  error={errors.Linkedin}
                />
                <Input
                  placeholder="Lets talk about your idea"
                  onChangeHandler={(value) => inputChangeHandler("idea", value)}
                  error={errors.idea}
                />
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
                  type="submit"
                  disabled={
                    isSubmitting ||
                    Object.values(errors).some((error) => error.length > 0)
                  }
                  className="bg-[#0c9e24] rounded-xl w-full text-white text-lg font-semibold py-2  disabled:bg-slate-600"
                >
                  Submit
                </button>
                <div className="flex gap-2  items-center ">
                  <input type="checkBox" />
                  <p className="text-sm text-gray-600">
                    I want to product my date by signing an NDA
                  </p>
                </div>
              </div>
            </form>
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
                <img
                  src="Tick-Icons-Logos-Symbols-–-Free-Download-PNG-SVG-09-24-2024_05_10_PM.png"
                  alt=""
                />
                <p>+44777777777</p>
              </div>
              <div className="flex justify-center md:justify-start">
                <img
                  className="w-10"
                  src="Tick-Icons-Logos-Symbole-–-Kostenloser-Download-PNG-SVG-09-25-2024_12_27_PM.png"
                  alt=""
                />
                <p>+13333333330</p>
              </div>
            </div>
            <div>
              <p className="font-bold text-sm">
                Would you like to join our newsletter?
              </p>
              <div className="flex mt-5 py-2 gap-4 items-center justify-center md:justify-start">
                <input className="border-b-2 py-2" placeholder="Email" />
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
