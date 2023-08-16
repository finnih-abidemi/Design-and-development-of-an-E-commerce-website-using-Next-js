"use client";
import { Loading } from "@/components/Loading";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Header from "@/components/Header";

export default function Page({ params }: { params: { productId: string } }) {
  const [product, setProduct] = useState<{
    name: string;
    price: number;
    image: string;
    description: string;
  } | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>("S");

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get(`/api/products/${params.productId}`);
      setProduct(data);
    };
    getProduct();
  }, [params.productId]);

  const size = ({ letter }: any) => (
    <div
      className={`px-5 py-3 rounded-md bg-gray-100 font-bold text-[13px] cursor-pointer ${
        selectedSize === letter ? "border border-black" : ""
      }`}
      onClick={() => setSelectedSize(letter)}
    >
      {letter}
    </div>
  );
  return (
    <div>
      <Header />
      {/* {product !? ( 
        <div>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <Image src={product.image} alt={product.name} />
          <p>{product.description}</p>
        </div>
      ) : (
        <Loading />
      )} */}
      <>
        <main className="mt-[80px]">
          <section className=" px-10 w-full bg-gray-100 pt-6 h-[100px] text-center ">
            <h2 className="text-[30px] font-bold">Women track suit</h2>
            <div className="flex justify-between">
              <div className="flex">
                <Image src="/star.svg" alt="star" width={20} height={20} />
                <Image src="/star.svg" alt="star" width={20} height={20} />
                <Image src="/star.svg" alt="star" width={20} height={20} />
                <Image src="/star.svg" alt="star" width={20} height={20} />
                <Image src="/star.svg" alt="star" width={20} height={20} />
              </div>

              <div className="flex">
                <p className="text-[14px]">
                  Availability: <span className="font-bold">In stock</span>
                </p>
              </div>
            </div>
          </section>
          <section className="container flex gap-5 mt-4">
            <div className="flex w-[50%]">test</div>
            <div className="flex w-[50%] flex-col">
              <p className="text-[14px]">
                COLOR: <span className=" ml-2 font-bold">Blue</span>
              </p>
              <div className="flex gap-3 mt-2">
                <Image src="/sofa.png" alt="sofa" width={100} height={100} />
                <Image src="/sofa.png" alt="sofa" width={100} height={100} />
                <Image src="/sofa.png" alt="sofa" width={100} height={100} />
                <Image src="/sofa.png" alt="sofa" width={100} height={100} />
                <Image src="/sofa.png" alt="sofa" width={100} height={100} />
              </div>
              <p className="text-[14px] mt-4 border-b-2 pb-[3rem]">
                SIZE:{" "}
                <span className="ml-2 font-bold">{selectedSize || ""}</span>
                <div className="flex mt-2 gap-4">
                  {size({ letter: "XS" })}
                  {size({ letter: "S" })}
                  {size({ letter: "M" })}
                  {size({ letter: "L" })}
                </div>
              </p>
              <div className="flex gap-[4rem] mb-8 mt-10 border-b-2 pb-[3rem] items-center">
                <p className="font-bold text-[18px] text-black">
                  $ <span>300</span>
                </p>
                <button className="px-3 py-2 rounded-md bg-gray-700 text-white text-[14px] font-light hover:bg-gray-500">
                  ADD TO CART{" "}
                </button>
                <Image src="/love.svg" alt="star" width={20} height={20} className=" hover:bg-gray-100 cursor-pointer"/>
              </div>
              <div className="flex justify-between mt-10 md:mt-2 gap-4">
                <div className="flex gap-3">
                  <Image src="/ship.svg" width={25} height={25} alt="ship" />
                  <div className="text-left flex items-center md:flex-col flex-row md:items-start">
                    <p className="md:text-[12px] invisible md:visible">
                      Free shipping on all order or order above $99
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Image src="/refresh.svg" width={25} height={25} alt="ship" />
                  <div className="text-left flex items-center md:flex-col flex-row md:items-start">
                    <p className="md:text-[12px] invisible md:visible">
                      Simply return it within 30 days for an exchange
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Image src="/support.svg" width={25} height={25} alt="ship" />
                  <div className="text-left flex items-center md:flex-col flex-row md:items-start">
                    <p className="md:text-[12px] invisible md:visible">
                      Contact us 24 hours a day, 7 days a week
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center mt-4">
              <p className="text-[13px] mt-6 font-bold">GUARANTEED SAFE CHECKOUT</p>
                <div className=" border-b-2 text-white"> {"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}</div>
              </div>
              <Image src={"/group.svg"} width={1000} height={100} alt="group" className="mt-5 border-b-2 pb-[3rem]"/>
              <p className="text-[14px] mt-[2.5rem] font-bold">
                ADDITIONAL INFORMATION
              </p>
              <div className="mt-3 flex flex-col gap-4 border-b-2 pb-[2.5rem] pt-[1.5rem]">
              <p className="text-[13px] font-bold ">
                Color: <span className=" ml-2 font-normal">Blue, White, Black, Gray</span>
              </p>
              <p className="text-[13px] font-bold">
                Size: <span className=" ml-2 font-normal">XS, S, M, L</span>
              </p>
              <p className="text-[13px] font-bold">
                Material: <span className=" ml-2 font-normal">100% ployster</span>
              </p>
              </div>
              <p className="text-[14px] mt-[2.5rem] font-bold">
                REVIEWS
              </p>
              <div className="flex flex-col">

              </div>
            </div>
          </section>
        </main>
      </>
    </div>
  );
}
