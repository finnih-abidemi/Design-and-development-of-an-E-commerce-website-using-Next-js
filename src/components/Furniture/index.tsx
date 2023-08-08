"use client";
import React from "react";
import Image from "next/image";

const Furniture = () => {
  const [selectedItem, setSelectedItem] = React.useState(0);
  const [products, setProducts] = React.useState([]);

  const handleItemClick = (index: any) => {
    setSelectedItem(index);
  };

  React.useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("/furniture_product.json");
      const products = await response.json();
      setProducts(products);
    };
    getProduct();
  }, []);

  const GoldStar = () => (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 100 100"
    >
      <polygon
        points="50,0 61.8,38.2 100,38.2 69.1,61.8 80.9,100 50,76.4 19.1,100 30.9,61.8 0,38.2 38.2,38.2"
        fill="gold"
      />
    </svg>
  );

  const getContent = (index: any) => {
    switch (index) {
      case 0:
        return products.map((product: any) => {
          console.log(product);
          return (
            <div className="flex flex-col gap-4 w-full" key={product}>
              <div className="bg-gray-100 rounded-lg w-full flex items-center justify-center flex-col py-4 pb-6 overflow-hidden shadow-md hover:shadow-lg cursor-pointer">
                <Image
                  src={product.imagePath}
                  alt="product"
                  width={250}
                  height={250}
                />
              </div>
              <p className="text-gray-400 font-medium text-[14px] p-0 m-0">
                {product.name}
              </p>
              <div className="flex justify-between mt-[-10px]">
                <p className="text-gray-500 font-bold text-[14px] p-0 m-0">
                  ${product.price}
                </p>
                <div className="flex">
                    <GoldStar />
                    <GoldStar />
                    <GoldStar />
                    <GoldStar />
                    <GoldStar />
                  </div>
              </div>
            </div>
          );
        });
      case 1:
        return "Content B";
      case 2:
        return "Content C";
      case 3:
        return "Content D";
      case 4:
        return "Content E";
      default:
        return "";
    }
  };

  const visualizeContent = ({ title }: any) => (
    <div className="">
      <div className="flex justify-between items-center">
        <h1 className="text-[20px] font-medium text-gray-700">{title}</h1>
        <div className="invisible md:visible">
          <ul className="listed flex w-fit items-center justify-center gap-3 rounded-3xl px-5 py-2">
            <li
              onClick={() => handleItemClick(0)}
              className={` flex cursor-pointer items-center px-4 text-[0.9rem] text-lg font-medium text-gray-400 hover:text-gray-700 ${
                selectedItem === 0
                  ? "rounded-3xl bg-white py-2 text-gray-700"
                  : ""
              }`}
            >
              New arrivals
            </li>
            <li
              onClick={() => handleItemClick(1)}
              className={` flex cursor-pointer items-center px-4 text-[0.9rem] text-lg font-medium text-gray-400 hover:text-gray-700 ${
                selectedItem === 1
                  ? "rounded-3xl bg-white py-2 text-gray-700"
                  : ""
              }`}
            >
              Specials
            </li>
            <li
              onClick={() => handleItemClick(2)}
              className={` flex cursor-pointer items-center px-4 text-[0.9rem] text-lg font-medium text-gray-400 hover:text-gray-700 ${
                selectedItem === 2
                  ? "rounded-3xl bg-white py-2 text-gray-700"
                  : ""
              }`}
            >
              Best sellers
            </li>
            <li
              onClick={() => handleItemClick(3)}
              className={` flex cursor-pointer items-center px-4 text-[0.9rem] text-lg font-medium text-gray-400 hover:text-gray-700 ${
                selectedItem === 3
                  ? "rounded-3xl bg-white py-2 text-gray-700"
                  : ""
              }`}
            >
              Most viewed
            </li>
            <li
              onClick={() => handleItemClick(4)}
              className={` flex cursor-pointer items-center px-4 text-[0.9rem] text-lg font-medium text-gray-400 hover:text-gray-700 ${
                selectedItem === 4
                  ? "rounded-3xl bg-white py-2 text-gray-700"
                  : ""
              }`}
            >
              Featured products
            </li>
          </ul>
        </div>
      </div>
      {selectedItem !== null && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-between">
          {getContent(selectedItem)}
        </div>
      )}
    </div>
  );
  return (
    <div className="container md:my-10 md:pt-10 px-[30px] md:px-0">
      <main className="w-full">
        <>
        {visualizeContent({ title: "Furniture" })}
        <button className="bg-gray-100 text-gray-700 w-full py-2 hover:bg-gray-200 mb-[150px] mt-[40px]">See all</button>
        </>
        <>
        {visualizeContent({ title: "Accessories" })}
        <button className="bg-gray-100 text-gray-700 w-full py-2 hover:bg-gray-200 mb-[150px] mt-[40px]">See all</button>
        </>
      </main>
    </div>
  );
};

export default Furniture;
