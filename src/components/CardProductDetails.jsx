import React from "react";

const CardProductDetails = ({ img, productName }) => {
  return (
    <div className="w-[80%] flex flex-col justify-start gap-2">
      <div className="w-full flex justify-between items-center paddingXShorter paddingYShorter gap-4">
        <div className="rounded-lg overflow-auto">
          <img src={img} className="object-cover" />
        </div>
        <div className="w-[40%] flex flex-col gap-4 text-[#000000]">
          <p className="font-bold">{productName}</p>
          <div className="flex justify-start">
            <a>x</a>
            <a>x</a>
            <a>x</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductDetails;
