import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const CardProductDetails = ({ img, productName, rate, total }) => {
  //   const ratingChanged = (newRating) => {
  //     console.log(newRating);
  //   };
  return (
    <div className="overflow-y-auto w-[75%] flex flex-col justify-start gap-2">
      <div className="w-full flex justify-center paddingXShorter gap-4">
        <div className="rounded-lg overflow-auto">
          <img src={img} className="object-cover" />
        </div>
        <div className="w-[40%] flex flex-col gap-4 text-[#000000]">
          <p className="font-bold">{productName}</p>
          <div className="flex justify-start gap-2">
            <Stack spacing={1}>
              <Rating
                name="half-rating-read"
                // changeRating={ratingChanged}
                defaultValue={2.5}
                precision={4.2}
                readOnly
              />
            </Stack>
            <a>{rate} Отзыв</a>
            <a>{total} Купили</a>
          </div>
          <div className="flex justify-start gap-2">
            <a>Описание </a>
            <a>Характеристики</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductDetails;
