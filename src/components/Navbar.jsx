import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { navItem } from "../Helpers/Constants";
import InputSearchProduct from "./InputSearchProduct";

const Navbar = () => {
  return (
    <>
      <section className="hidden md:block lg:block">
        <nav className="bg-[#ffffff] px-4 py-2">
          <div className="bg-[#fe2722] px-4 py-3 rounded-lg">
            <div className="flex justify-between">
              <span className="flex gap-4 items-center">
                <Icon icon="arcticons:aliexpress" width={40} color="#ffffff" />
                <Link to={`/`}>
                  <p className="text-[#ffffff] text-xl">ALiMpess</p>
                </Link>
              </span>
              <InputSearchProduct />
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
      </section>

      <section className="block md:hidden lg:hidden">
        <div className="bg-[#ffffff] p-4">
          <input
            type="text"
            className="w-full bg-[#ffffff] border rounded-lg h-10 px-2 text-[#000000]"
            placeholder="чехол на айфон 13 pro"
          />
        </div>
      </section>
    </>
  );
};

export default Navbar;
