"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/context";

const Page = ({ params }: { params: { slug: String } }) => {
  const { push } = useRouter();
  const { cartItem, user, setUser, setCartItem, allProducts, searchResult } =
    useContext(UserContext);
  return (
    <main className="mt-[120px]">
      <h1 className="text-[30px] font-bold text-center">Search Results</h1>
      {searchResult.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 mt-10">
          {searchResult.map((item) => {
            return (
              <div
                className="flex flex-col gap-2 items-center justify-center cursor-pointer border py-8 rounded-lg shadow-md hover:shadow-xl"
                key={item.productId}
                onClick={() =>
                  push(`/product/${item.category}/${item.productId}`)
                }
              >
                <Image
                  src={item.imagePath}
                  width={200}
                  height={200}
                  alt="product"
                />
                <p className="text-[14px] font-bold">{item.name}</p>
                <p className="text-[14px] font-bold">${item.price}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-10">
          <Image
            src={"/result.jpg"}
            width={400}
            height={400}
            alt="no result"
          />
          <p className="text-[20px] font-medium text-gray-400 mt-10">No Result Found</p>
        </div>
      )}
    </main>
  );
};

export default Page;
