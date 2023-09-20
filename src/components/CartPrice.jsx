import React from "react";

const CartPrice = () => {
  return (
    <div className="fix w-[20%] flex flex-col justify-start gap-2  item-center">
      <card className="rounded-lg border p-4 text-[#000000]">
        <div className="flex flex-col justify-center text-[#000000] gap-5">
          <p>Ringkasan Belanja</p>
          <a>total harga [ ] Barang : </a>
          <span className="flex justify-between">
            <p>Sub Total :</p>
            <a>Rp 12.500,06-</a>
          </span>
          <button className="bg-[#E34234] text-[#000000] rounded-lg p-2">
            Keranjang
          </button>
          <button className="bg-[#ffffff] text-[#E34234] rounded-lg p-2 border">
            Beli Langsung
          </button>
        </div>
      </card>
    </div>
  );
};

export default CartPrice;
