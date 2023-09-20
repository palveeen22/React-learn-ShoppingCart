import React from "react";
import { Icon } from "@iconify/react";
import { navItem } from "../Helpers/Constants";

const Navbar = () => {
  return (
    <nav className="bg-[#ffffff] px-4 py-2">
      <div className="bg-[#fe2722] px-4 py-3 rounded-lg">
        <div className="flex justify-between">
          <span className="flex gap-4 items-center">
            <Icon icon="arcticons:aliexpress" width={40} color="#ffffff" />
            <p className="text-[#ffffff] text-xl">ALiMpess</p>
          </span>
          <input
            type="text"
            className="w-[50%] bg-[#ffffff] rounded-lg px-2 text-[#000000]"
            placeholder="чехол на айфон 13 pro"
          />
          <div className="flex justify-between gap-2">
            {navItem?.map((e) => {
              return (
                <span className="flex flex-col items-center text-center bg-[#E52F20] p-2 rounded-lg">
                  <Icon icon={e?.icon} color="#ffffff" width={25} />
                  <a className="text-xs text-[#ffffff]">{e?.a}</a>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
