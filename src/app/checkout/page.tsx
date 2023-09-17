"use client";
import React, {useState} from "react";
import { useRouter } from "next/navigation";
import { UserContext } from '@/context/context'

const Checkout = () => {
  const {user} = React.useContext(UserContext)
  const { push } = useRouter();
  const [proceedToShipping, setProceedToShipping] = useState(false);
  const [proceedToPayment, setProceedToPayment] = useState(false);

  const shipping = () => (
    <>
      <h1 className="font-bold text-[28px]">Where would you like your sent?</h1>
      <form className="w-full mx-auto text-center">
        <div className="flex flex-col w-full mt-[40px] text-left">
          <label htmlFor="country" className="font-bold text-[15px] ml-3">
            Country
          </label>
          <input
            type="text"
            name="country"
            id="country"
            className="border-b-2 placeholder:text-[14px] outline-none rounded-[5px] h-[40px] px-[10px] mt-[10px]"
            placeholder="Enter your country"
          />
        </div>
        <div className="flex flex-col w-full mt-[40px] text-left">
          <label htmlFor="address" className="font-bold text-[15px] ml-3">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="border-b-2 placeholder:text-[14px] outline-none rounded-[5px] h-[40px] px-[10px] mt-[10px]"
            placeholder="Enter your address"
          />
        </div>
        <div className="flex  gap-6 w-full mt-[40px] text-left">
          <div className="flex flex-col w-full">
            <label htmlFor="city" className="font-bold text-[15px] ml-3">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              className="border-b-2 placeholder:text-[14px] outline-none rounded-[5px] h-[40px] px-[10px] mt-[10px]"
              placeholder="Enter your city"
            />
          </div>
          <div className="flex flex-col w-full text-left">
            <label htmlFor="zip" className="font-bold text-[15px] ml-3">
              Zip code
            </label>
            <input
              type="text"
              name="zip"
              id="zip"
              className="border-b-2 placeholder:text-[14px] outline-none rounded-[5px] h-[40px] px-[10px] mt-[10px]"
              placeholder="Enter your zip code"
            />
          </div>
        </div>
        <div className="flex flex-col w-full mt-[40px] text-left">
          <label htmlFor="state" className="font-bold text-[15px] ml-3">
            State/province
          </label>
          <input
            type="text"
            name="state"
            id="state"
            className="border-b-2 placeholder:text-[14px] outline-none rounded-[5px] h-[40px] px-[10px] mt-[10px]"
            placeholder="Enter your state"
          />
        </div>
        <div className="flex flex-col w-full mt-[40px] text-left">
          <label htmlFor="phone" className="font-bold text-[15px] ml-3">
            Phone number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="border-b-2 placeholder:text-[14px] outline-none rounded-[5px] h-[40px] px-[10px] mt-[10px]"
            placeholder="Enter your phone number"
          />
        </div>
        <button
          className="mt-[4rem] mb-8 bg-gray-700 text-white hover:bg-gray-500 rounded-lg py-3 text-center w-[80%]"
          onClick={() => setProceedToPayment(true)}
        >
          Proceed to payment
        </button>
      </form>
    </>
  );
  const payment = () => (
    <>
      <section>
        <h1 className="font-bold text-[28px]">Payment</h1>
      </section>
    </>
  );
  return (
    <div>
      <main className="container mt-[120px] flex flex-col w-full items-center">
      {proceedToPayment ? (
          payment() // Render the payment component
        ) : proceedToShipping ? (
          shipping() // Render the shipping component
        ) : (
            <>
        <h1 className="font-bold text-[28px]">Who is placing this order?</h1>
        <form className="w-full mx-auto text-center">
          <div className="flex flex-col w-full mt-[40px] text-left">
            <label htmlFor="email" className="font-bold text-[15px] ml-3">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={user?.email}
              disabled
              className="border-b-2 placeholder:text-[14px] text-[13.5px] text-gray-400 outline-none rounded-[5px] h-[40px] px-[10px] mt-[10px]"
              placeholder="Enter your email address"
            />
          </div>
          <div className="flex  gap-6 w-full mt-[60px] text-left">
            <div className="flex flex-col w-full">
              <label htmlFor="firstName" className="font-bold text-[15px] ml-3">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={user?.firstName}
                className="border-b-2 placeholder:text-[14px] capitalize outline-none rounded-[5px] h-[40px] px-[10px] mt-[10px]"
                placeholder="Enter your first name"
              />
            </div>
            <div className="flex flex-col w-full text-left">
              <label htmlFor="lastName" className="font-bold text-[15px] ml-3">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={user?.lastName}
                className="border-b-2 placeholder:text-[14px] capitalize outline-none rounded-[5px] h-[40px] px-[10px] mt-[10px]"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <button
            className="mt-[4rem] bg-gray-700 text-white hover:bg-gray-500 rounded-lg py-3 text-center w-[80%]"
            onClick={() => setProceedToShipping(true)}
          >
            Proceed to shipping
          </button>
        </form>
        </>
        )}
      </main>
    </div>
  );
};

export default Checkout;
