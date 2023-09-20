import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartApi from "../../api/Cart.Api";
import CartProduct from "../../components/CartProduct";
import CartPrice from "../../components/CartPrice";
import CardProductDetails from "../../components/CardProductDetails";

const CartById = () => {
  const [data, setData] = useState();
  const params = useParams();
  const { slug } = params; // harus di ambil, sebagai slice terakhir

  //get api cart by id
  const cartsById = (id) => {
    CartApi.getCartById(id)
      .then((res) => {
        setData(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    cartsById(slug);
  }, []);

  return (
    <div className="flex justify-between w-full paddingX paddingY bg-[#ffffff]">
      <CardProductDetails img={data?.thumbnailUrl} productName={data?.name} />
      <CartPrice />
    </div>
  );
};

export default CartById;
