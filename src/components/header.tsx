import { useState } from "react";
export function Header() {
  const [hiddenMenu, sethiddenMenu] = useState(true);
  return (
    <div className="bg-gray-100 w-full fixed left-0 top-0">
      <div className=" flex px-20 py-4 max-w-{1440px} justify-between ">
        <div className="left flex flex-col items-center ">
          <img className="size-10" src="gold-medal.svg" />
        </div>
        <div className="hidden right md:flex md:gap-6 md:items-center md:mx-auto">
          <span className="text-[#BD9531] cursor-pointer hover:underline hover:font-bold">company</span>
          <span className="text-[#BD9531] cursor-pointer hover:underline hover:font-bold">services</span>
          <span className="text-[#BD9531] cursor-pointer hover:underline hover:font-bold">FinTechSolution</span>
          <span className="text-[#BD9531] cursor-pointer hover:underline hover:font-bold">Products</span>
          <span className="text-[#BD9531] cursor-pointer hover:underline hover:font-bold">Portfolio</span>
          <span className="text-[#BD9531] cursor-pointer hover:underline hover:font-bold">Contact Us</span>
        </div>
        <div className="block md:hidden right">
          <button onClick={() => sethiddenMenu(!hiddenMenu)}>
            <img src="icons8-hamburger-menu-50.png" alt="" />
          </button>
        </div>
      </div>
      <div
        className={`bg-gray-100 h-full absolute z-50 w-full ${
          hiddenMenu ? "hidden" : ""
        }`}
      >
        <div className="flex flex-col  gap-y-4 pl-12 pb-6  text-{16px} font-semibold">
          <span>company</span>
          <span>services</span>
          <span>FinTechSolution</span>
          <span>Products</span>
          <span>Portfolio</span>
          <span>Contact Us</span>
        </div>
      </div>
    </div>
  );
}
