import React from "react";
import Biscuit from "../Biscuit";
import Image from "next/image";

const Collection = () => {
  return (
    <div className="container text-center mt-[100px] py-10">
      <Biscuit text="Collection" subText="" />
      <div className="flex gap-20 h-[400px] mt-10">
        <div className="bg-gray-100 rounded-lg w-full flex items-center justify-center relative overflow-hidden shadow-md hover:shadow-lg">
          <Image
            src="/chair.png"
            width={400}
            height={400}
            alt="first_collection"
          />
          <p className="absolute top-[50%] left-[30%] text-gray-500 font-bold text-[18px] bg-white opacity-85 w-[200px] py-2 rounded-md">
            Furniture
          </p>
        </div>
        <div className="bg-white w-full flex flex-col gap-3 shadow-md hover:shadow-lg items-center justify-center">
          <div className=" rounded-lg w-full flex gap-3 items-center justify-center relative overflow-hidden">
            <div className="bg-gray-100 w-full justify-center flex ">
              <Image
                src="/chair.png"
                width={200}
                height={200}
                alt="first_collection"
              />
            </div>
            <div className="bg-gray-100 w-full justify-center flex ">
              <Image
                src="/chair.png"
                width={200}
                height={200}
                alt="first_collection"
              />
            </div>
          </div>
          <div className="bg-gray-100 w-full flex justify-center relative">
            <Image
              src="/chair.png"
              width={200}
              height={100}
              alt="first_collection"
            />
             <p className="absolute top-[60%] left-[30%] text-gray-500 font-bold text-[18px] bg-white opacity-85 w-[200px] py-2 rounded-md">
            Accessories
          </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <div className="flex gap-3">
          <Image src="/ship.svg" width={25} height={25} alt="ship" />
          <div className="text-left">
            <h1 className="font-medium text-[14px] text-gray-700">FREE SHIPPING</h1>
            <p className="text-[12px]">
              Free shipping on all US order or order above $99
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <Image src="/refresh.svg" width={25} height={25} alt="ship" />
          <div className="text-left">
            <h1 className="font-medium text-[14px] text-gray-700">30 DAYS RETURN</h1>
            <p className="text-[12px]">
             Simply return it within 30 days for an exchange
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <Image src="/support.svg" width={25} height={25} alt="ship" />
          <div className="text-left">
            <h1 className="font-medium text-[14px] text-gray-700">SUPPORT 24/7</h1>
            <p className="text-[12px]">
              Contact us 24 hours a day, 7 days a week
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
