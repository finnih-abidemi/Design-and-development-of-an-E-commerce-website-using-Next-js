"use client"
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Cart = () => {
    const {push} = useRouter()
  return (
    <div>
      <main className="mt-[120px] ">
        <header className="flex items-center gap-4 cursor-pointer container">
          <Image src={"/back.svg"} width={30} height={30} alt="back" />
          <h1 className="text-[15px]">Back to store</h1>
        </header>
        <section className="w-full flex gap-10 mt-10 container">
          <div className="flex w-[75%] flex-col gap-10">
            <div className="flex justify-between items-center  w-full">
              <h2 className="text-4xl font-bold">Shopping cart</h2>
              <p className="text-[14px]">3 items</p>
            </div>
            <div className="flex">
              <div className="flex w-[50%]">
                <p className="text-[14px] font-medium">Items</p>
              </div>
              <div className="flex w-[50%]">
                <div className="flex justify-around w-full">
                  <p className="text-[14px] font-medium">Size</p>
                  <p className="text-[14px] font-medium">Quantity</p>
                  <p className="text-[14px] font-medium">Price</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[25%] bg-gray-100 rounded-lg px-3 py-3 h-[80vh] relative mb-10">
            <h3 className="text-xl font-medium">Summary</h3>
            <div className="flex flex-col gap-8 mt-10">
              <div className="flex justify-between">
                <p className="text-[14px] font-medium text-gray-400">Subtotal</p>
                <p className="text-[14px] font-medium text-gray-500">$ 300</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[14px] font-medium text-gray-400">Shipping</p>
                <p className="text-[14px] font-medium text-gray-500">$ 300</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[14px] font-medium text-gray-400">Tax</p>
                <p className="text-[14px] font-medium text-gray-500">$ 300</p>
              </div>
              <div className="absolute bottom-[15px] w-full left-0 px-3">
              <div className="flex justify-between">
                <p className="text-[14px] font-medium text-gray-400">Total</p>
                <p className="text-[14px] font-medium text-gray-500">$ 300</p>
              </div>
              <button className="mt-5 bg-gray-700 text-white hover:bg-gray-500 rounded-lg py-3 text-center w-full">Checkout</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cart;
