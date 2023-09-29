import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { headerItem, productType } from "../../Helpers/Constants";
import CartProduct from "../../components/CartProduct";
import CartApi from "../../api/Cart.Api";
import Swipper from "../../components/Swipper";

const HomePage = () => {
  // data product by value
  const [dataProduct, setDataProduct] = useState([]);

  // data by get api
  const [data, setData] = useState([]);

  // data which showing statu by condition
  const [activeProductType, setActiveProductType] = useState();

  // get api allCarts
  const allCarts = () => {
    CartApi.getAllCarts()
      .then((res) => {
        setData(res?.data);
        // console.log(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    allCarts();
  }, []);

  const handleClick = (type) => {
    setActiveProductType(type);
    setDataProduct(filteredData);
  };

  const filteredData = activeProductType
    ? data.filter((item) => item.type === activeProductType)
    : data;

  return (
    <>
      <section className="hidden md:block lg:block">
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
              {/* <Swipper /> */}
              <div className="flex justify-between p-8 rounded-xl bg-[#d9d9d9] h-40 items-center">
                <h3 className="w-[40%] text-[#000000] font-bold">
                  Скидка до 270₽ <br /> за каждые 2700₽
                </h3>
                <Icon icon="mdi:cart-discount" width={100} color="#000000" />
              </div>

              {/* filtering by value */}
              <div className="flex justify-between text-[#000000]">
                <div className="flex justify-start gap-4">
                  {productType?.map((e) => {
                    return (
                      <p
                        className={`${
                          activeProductType === e?.value
                            ? "underline"
                            : "no-underline"
                        } cursor-pointer`}
                        onClick={() => handleClick(e?.value)}
                      >
                        {e?.label}
                      </p>
                    );
                  })}
                </div>
                <p
                  onClick={() => {
                    setActiveProductType(undefined); // kenapa und, karena sesuai logic di atas
                  }}
                  className="cursor-pointer hover:text-[#000000] text-gray-400"
                >
                  Показать Всё
                </p>
              </div>
              {/* katalog */}
              <article className="grid lg:grid-cols-4 grid-cols-2 gap-4">
                {filteredData?.map((e) => {
                  return (
                    <Link to={`/product/${e?.id}`}>
                      <CartProduct
                        img={e?.thumbnailUrl}
                        titleProduct={e?.name}
                        rate={e?.rate}
                        status={e?.quantity}
                        price={e?.price}
                        type={e?.type}
                      />
                    </Link>
                  );
                })}
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* mobile version  */}
      <section className="block md:hidden lg:hidden">
        <header className="bg-[#ffffff] paddingXShorter paddingYShorter">
          <div className="flex flex-col gap-8">
            {/* card */}
            <div className="flex justify-between p-4 rounded-xl bg-[#FFC300] h-40 items-center">
              <h3 className="w-full text-[#000000] font-bold">
                Скидка до 270₽ <br />
                за каждые 2700₽
              </h3>
              <Icon icon="mdi:cart-discount" width={70} color="#000000" />
            </div>

            {/* filtering by value */}
            {/* <div className="flex justify-between text-[#000000]">
            <div className="flex justify-start gap-4">
              {productType?.map((e) => {
                return (
                  <p
                    className={`${
                      activeProductType === e?.value
                        ? "underline"
                        : "no-underline"
                    } cursor-pointer`}
                    onClick={() => handleClick(e?.value)}
                  >
                    {e?.label}
                  </p>
                );
              })}
            </div>
            <p
              onClick={() => {
                setActiveProductType(undefined); // kenapa und, karena sesuai logic di atas
              }}
              className="cursor-pointer hover:text-[#000000] text-gray-400"
            >
              Показать Всё
            </p>
          </div> */}

            {/* katalog */}
            <article className="grid lg:grid-cols-4 grid-cols-2 gap-4">
              {filteredData?.map((e) => {
                return (
                  <Link to={`/product/${e?.id}`}>
                    <CartProduct
                      img={e?.thumbnailUrl}
                      titleProduct={e?.name}
                      rate={e?.rate}
                      status={e?.quantity}
                      price={e?.price}
                      type={e?.type}
                    />
                  </Link>
                );
              })}
            </article>
          </div>
        </header>
      </section>
    </>
  );
};

export default HomePage;
