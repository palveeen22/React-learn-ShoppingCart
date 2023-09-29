import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";
import "swiper/css";

const Swipper = () => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {/* <SwiperSlide>
        <div className="flex justify-between p-8 rounded-xl bg-[#d9d9d9] h-40 items-center">
          <h3 className="w-[40%] text-[#000000] font-bold">
            Скидка до 270₽ <br /> за каждые 2700₽
          </h3>
          <Icon icon="mdi:cart-discount" width={100} color="#000000" />
        </div>
      </SwiperSlide> */}
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default Swipper;
