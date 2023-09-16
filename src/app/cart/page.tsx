"use client"
import Image from "next/image";
import React, {useContext, useState} from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/context";

const Cart = () => {
    const [itemQuantity, setItemQuantity] = useState(1);

    const {push} = useRouter()
    const {cartItem, setCartItem} = useContext(UserContext);
    
    const handleRemoveItem = (productName) => {
        const newCart = cartItem.filter((item) => item.name !== productName);
        setCartItem(newCart);
    }

    if(itemQuantity < 1) setItemQuantity(1);
    
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
              <p className="text-[14px]">{cartItem.length} items</p>
            </div>
            <div className="flex w-full">
              <table className=" w-full">
                <thead>
                  <tr className="text-[14px] text-gray-400">
                    <th className="px-5 py-3 text-left pl-10">Product</th>
                    <th className="px-5 py-3 text-left">Price</th>
                    <th className="px-5 py-3 text-left">Quantity</th>
                    <th className="px-5 py-3 text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItem.map((item: any) => (
                    <tr className="text-[14px] text-gray-400" key={item.name}>
                      <td className="px-5 py-3">
                        <div className="flex gap-5">
                          <Image
                            src={item.imagePath}
                            alt="sofa"
                            width={60}
                            height={60}
                          />
                          <div className="flex flex-col">
                            <h3 className="font-bold">{item.name}</h3>
                            <p className="text-[14px]">Color: Blue</p>
                            <p className="text-[14px]">Size: M</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-3">$ {item.price}</td>
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-5">
                          <button
                          onClick={() => setItemQuantity(itemQuantity - 1)}
                          className="bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200">
                            -
                          </button>
                          <p className="text-[14px]">{itemQuantity}</p>
                          <button
                          onClick={() => setItemQuantity(itemQuantity + 1)}
                          className="bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200">
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-5 py-3 relative">$ {(item.price * itemQuantity).toFixed(2)} <Image src={"/cancel.svg"} alt="cancel" width={10} height={20} onClick={() => handleRemoveItem(item.name)} className="absolute right-0 hover:bg-slate-100 p-2 w-[25px] rounded-full cursor-pointer top-[30px]" /> </td>
                    </tr>
                  ))}
                </tbody>
                </table>         
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
              <button className="mt-5 bg-gray-700 text-white hover:bg-gray-500 rounded-lg py-3 text-center w-full" onClick={() => push("/checkout")}>Checkout</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cart;
