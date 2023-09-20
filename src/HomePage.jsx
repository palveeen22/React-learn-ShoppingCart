import React from "react";
import CartProduct from "./components/CartProduct";
import img from "./assets/3.png";

const HomePage = () => {
  return (
    <section className="bg-[#ffffff] w-full paddingX paddingYShorter flex flex-col md:flex-row lg:flex-row justify-center gap-5 min-h-screen">
      <div className="md:w-[80%] w-full flex flex-col justify-start gap-2">
        <div className="w-full flex justify-between items-center paddingXShorter paddingYShorter gap-4">
          <div className="w-[60%] rounded-lg overflow-auto">
            <img src={img} className="object-cover" />
          </div>
          <div className="w-[40%] flex flex-col gap-4 text-[#000000]">
            <p className="font-bold">
              Чехол для телефона Motorola Moto G60 G53 G52 G50 G42 G30 G20 G22
              G52 E20 G9 Play
            </p>
            <a>
              dolor sit amet consectetur adipisicing elit. Eaque excepturi nulla
              quod quis voluptatum odit, dignissimos amet sint? Soluta similique
              obcaecati placeat. Laborum expedita tenetur, dolore nisi voluptas
              fugit eos.
            </a>
          </div>
        </div>
        {/* <div className="flex flex-col md:flex-row lg:flex-row justify-between p-4">
          <p className="text-[#000000] text-2xl">Cart </p>
          <div className="w-full overflow-auto flex flex-col"></div>
        </div> */}
      </div>

      {/* // cart item details */}
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
    </section>
  );
};

export default HomePage;
