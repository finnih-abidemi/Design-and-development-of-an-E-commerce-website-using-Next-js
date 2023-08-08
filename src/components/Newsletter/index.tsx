import React from "react";
import Biscuit from "../Biscuit";

const Newsletter = () => {
  return (
    <div className="mt-[100px] mb-[50px]">
      <main className="container flex flex-col justify-center items-center text-center w-full px-[30px] md:px-0">
        <Biscuit
          text="Keep updated and get unlimited discount"
          subText="Sign up for our newsletter to receive 10% off your first order and stay up to date on new arrivals and exclusive offers."
        />

        <div className="flex justify-center items-center gap-4 mt-10 w-full">
          <input
            type="text"
            placeholder="Enter your email address"
            className="border border-gray-400 px-4 py-3 rounded-md md:w-[50%]"
          />
          <button className="bg-gray-700 text-white px-4 py-3 rounded-md hover:bg-gray-500">
            Subscribe
          </button>
        </div>
      </main>
    </div>
  );
};

export default Newsletter;
