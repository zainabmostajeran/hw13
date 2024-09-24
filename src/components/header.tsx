import { useState } from "react";
export function Header() {
  const [hiddenMenu, sethiddenMenu] = useState(true);
  return (
    <div className="bg-gray-100 ">
      <div className=" flex px-14 py-4 max-w-{1440px} justify-between">
        <div className="left flex flex-col items-center">
          <img src="Icon@2x.png" />
        </div>
        <div className="hidden right md:flex md:gap-6 md:items-center md:mx-auto">
          <span>company</span>
          <span>services</span>
          <span>FinTechSolution</span>
          <span>Products</span>
          <span>Portfolio</span>
          <span>Contact Us</span>
        </div>
        {/* responsive */}

        <div className="block md:hidden right">
          <button onClick={() => sethiddenMenu(!hiddenMenu)}>
            <img src="icons8-hamburger-menu-50.png" alt="" />
          </button>
        </div>
      </div>
      <div
        className={`bg-gray-100 h-full absolute z-50 w-full${
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
