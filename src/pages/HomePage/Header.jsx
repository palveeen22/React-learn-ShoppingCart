import React from "react";
import { Icon } from "@iconify/react";
import { headerItem, cartListData } from "../../Helpers/Constants";
import CartProduct from "../../components/CartProduct";

const Header = () => {
  return (
    <div className="bg-[#ffffff] paddingXShorter paddingYShorter min-h-screen">
      <div className="w-full flex justify-between">
        <div className="w-[20%] flex flex-col gap-2">
          <span className="flex items-center">
            <p className="text-[#000000] font-semibold">Категории</p>
            <Icon
              icon="wi:direction-up"
              rotate={1}
              color="#000000"
              width={30}
            />
          </span>
          {headerItem?.map((e) => {
            return (
              <>
                <p className="text-[#000000] hover:bg-slate-200 hover:rounded-full px-2 cursor-pointer">
                  {e}
                </p>
              </>
            );
          })}
        </div>

        {/* article */}
        <div className="w-[70%] flex flex-col gap-4">
          <div className="flex justify-between p-8 rounded-xl bg-[#d9d9d9] h-40 items-center">
            <h3 className="w-[40%] text-[#000000] font-bold">
              Скидка до 270₽ <br /> за каждые 2700₽
            </h3>
            <Icon icon="mdi:cart-discount" width={100} color="#000000" />
          </div>

          {/* katalog */}
          <article className="grid grid-cols-4 gap-4">
            {cartListData?.map((e) => {
              return (
                <CartProduct
                  img={e?.thumbnailUrl}
                  titleProduct={e?.name}
                  rate={e?.rate}
                  status={e?.quantity}
                  price={e?.price}
                />
              );
            })}
          </article>
        </div>
      </div>
    </div>
  );
};

export default Header;
