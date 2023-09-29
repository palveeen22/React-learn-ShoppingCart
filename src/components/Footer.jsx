import React from "react";
import { footerItem } from "../Helpers/Constants";

const Footer = () => {
  return (
    <footer className="bg-[#d9d9d9] paddingXLonger paddingY w-full">
      <div className="flex justify-between">
        {footerItem?.map((e, i) => (
          <div className="flex flex-col justify-start gap-4">
            <h3 className="text-[#000000]">{e?.name}</h3>
            {e?.label?.map((element, index) => (
              <div className="flex flex-col" key={index}>
                <label className="text-[#000000] underline cursor-pointer">
                  {element}
                </label>
              </div>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
