import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { formatNumber } from "../Helpers/Utils";
import { senderItem } from "../Helpers/Constants";

const CartPrice = ({ price, data }) => {
  const [count, setCount] = useState(0);
  const [dataItem, setDataItem] = useState();
  const [countActive, setCountActive] = useState(false);

  //total quantity
  const totalQuantity = dataItem?.reduce((total, item) => {
    total + item.quantity;
  });

  //   Total price of all items
  const totalPrice = dataItem?.reduce((total, item) => {
    total + item.price;
  }, 0);

  const handleClick = () => {
    setCountActive(true);
    if (setCount === 0) {
      setCountActive(false);
    }
  };

  return (
    <div className="fix w-[25%] flex flex-col justify-start gap-2  item-center">
      <card className="rounded-3xl bg-[#f2f2f2] p-4 text-[#000000]">
        <div className="flex flex-col justify-center text-[#000000] gap-5">
          <h3 className="text-[#E34234]">{price} ₽</h3>
          <span className="flex justify-between">
            <p>Sub Total :</p>
            <a>{count}</a>
          </span>
          <span className="flex justify-between">
            <a>total harga {price}</a>
            <a>{price}</a>
          </span>

          <div className="flex justify-center w-full gap-2 font-semibold">
            <button
              className={`${
                countActive ? "bg-[#228B22]" : "bg-[#000000]"
              } w-[50%] text-[#ffffff] rounded-3xl py-3`}
              onClick={() => handleClick() === setCount(count + 1)}
            >
              В корзину
            </button>
            {countActive ? (
              <button className="bg-[#d9d9d9] flex justify-around px-2 w-[50%] text-[#000000] rounded-3xl py-3 border text-xl">
                <a onClick={() => setCount(count - 1)}> - </a>
                <a> {count} </a>
                <a onClick={() => setCount(count + 1)}> + </a>
              </button>
            ) : (
              <button className="bg-[#E34234] w-[50%] text-[#ffffff] rounded-3xl py-3">
                Купить сейчас
              </button>
            )}
          </div>
        </div>
      </card>
      <card className="rounded-3xl bg-[#f2f2f2] p-4 text-[#000000]">
        <div className="flex flex-col justify-center text-[#000000] gap-5">
          <p className="text-sm">Доставим в Москва</p>
          {senderItem?.map((e) => {
            return (
              <div className="flex justify-start gap-2">
                <Icon icon={e?.icon} width={20} />
                <span className="flex flex-col">
                  <p className="text-sm">25 окт - {e?.title}</p>
                  <p className="text-xs font-light">{e?.type}</p>
                </span>
              </div>
            );
          })}
          <div className="border-b"></div>
          <div className="flex gap-2 items-center">
            <Icon icon="ant-design:safety-outlined" width={13} />
            <a className="text-xs w-[85%]">
              Вернём деньги, если не получите заказ через 90 дней после
              отправки.
            </a>
          </div>
        </div>
      </card>
    </div>
  );
};

export default CartPrice;
