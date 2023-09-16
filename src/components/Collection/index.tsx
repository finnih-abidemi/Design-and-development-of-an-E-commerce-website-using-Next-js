import React from "react";
import MainTitle from "../Biscuit";
import Image from "next/image";

const Collection = () => {
  return (
    <div className="container text-center mt-10 md:mt-[100px] py-10 px-[30px] md:px-0">
      <MainTitle text="Collection" subText="" />
      <div className="flex gap-20 flex-col md:flex-row h-[400px] md:mt-10">
        <CollectionItem
          src="/chair.png"
          alt="Furniture"
          width={400}
          height={400}
          text="Furniture"
        />
        <div className="bg-white w-full flex flex-col gap-3 shadow-md hover:shadow-lg items-center justify-center">
          <div className="rounded-lg w-full flex gap-3 items-center justify-center relative overflow-hidden">
            {renderImage("/chair.png", 200, 200)}
            {renderImage("/chair.png", 200, 200)}
          </div>
          <div className="bg-gray-100 w-full flex justify-center relative">
            {renderImage("/chair.png", 200, 100)}
            <p className="absolute top-[60%] left-[30%] text-gray-500 font-bold text-[18px] bg-white opacity-85 w-[200px] py-2 rounded-md">
              Accessories
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10 md:mt-8">
        {renderFeature("ship.svg", "FREE SHIPPING", "Free shipping on all US order or order above $99")}
        {renderFeature("refresh.svg", "30 DAYS RETURN", "Simply return it within 30 days for an exchange")}
        {renderFeature("support.svg", "SUPPORT 24/7", "Contact us 24 hours a day, 7 days a week")}
      </div>
    </div>
  );
};

const CollectionItem = ({ src, alt, width, height, text }) => (
  <div className="bg-gray-100 rounded-lg w-full flex items-center justify-center relative overflow-hidden shadow-md hover:shadow-lg">
    {renderImage(src, width, height)}
    <p className="absolute top-[50%] left-[30%] text-gray-500 font-bold text-[18px] bg-white opacity-85 w-[200px] py-2 rounded-md">
      {text}
    </p>
  </div>
);

const renderImage = (src, width, height) => (
  <Image src={src} width={width} height={height} alt={src} />
);

const renderFeature = (src, title, description) => (
  <div className="flex gap-3">
    {renderImage(`/${src}`, 25, 25)}
    <div className="text-left flex items-center md:flex-col flex-row md:items-start">
      <h1 className="font-medium text-[10px] md:text-[14px] text-gray-700">{title}</h1>
      <p className="md:text-[12px] invisible md:visible">{description}</p>
    </div>
  </div>
);

export default Collection;
