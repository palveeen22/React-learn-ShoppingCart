import React, { useState, useEffect } from "react";

const InputSearchProduct = ({ data }) => {
  const placeholderText = [
    "чехол Iphone 13 pro",
    "Подушка для жизни",
    "наушники ",
  ];
  const [searchValue, setSearchValue] = useState("");
  const [changePlaceholder, setChangePlaceholder] = useState(
    placeholderText[0]
  );

  //   const handleInputChange = (event) => {
  //     setSearchValue(event.target.value);
  //   };

  useEffect(() => {
    const interval = setInterval(() => {
      setChangePlaceholder((prevPlaceholder) => {
        const currentIndex = placeholderText.indexOf(prevPlaceholder);
        const nextIndex = (currentIndex + 1) % placeholderText.length;
        return placeholderText[nextIndex];
      });
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-[50%] flex justify-between">
      <div className="relative w-full">
        <input
          type="text"
          value={searchValue}
          //   onChange={handleInputChange}
          placeholder={changePlaceholder}
          className="w-full bg-[#ffffff] rounded-lg px-2 h-full text-[#000000]"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-5 py-3 bg-[#c4f040] text-[#000000] text-sm rounded-full">
          Найти
        </button>
      </div>
    </div>
  );
};

export default InputSearchProduct;
