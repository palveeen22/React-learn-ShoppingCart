import React from "react";
import { Icon } from "@iconify/react";
import { formatNumber } from "../Helpers/Utils";

const CartProduct = ({ img, titleProduct, rate, status, price }) => {
  return (
    <div className="flex flex-col gap-2">
      <img src={img} className="w-full h-[60%] object-cover rounded-3xl" />
      <p className="text-[#000000] font-light">{titleProduct}</p>
      <div className="flex gap-3 items-center">
        <span className="flex justify-between text-[#000000] item-center">
          <Icon
            icon="material-symbols:star"
            width={20}
            color="#fe2722"
            className="item-center"
          />
          <a>{rate}</a>
        </span>
        <a className="text-[#000000] text-md">{status} Купили</a>
      </div>
      <h4 className="text-[#fe2722] text-2xl font-bold">
        {formatNumber(price)} ₽
      </h4>
    </div>
  );
};

export default CartProduct;
