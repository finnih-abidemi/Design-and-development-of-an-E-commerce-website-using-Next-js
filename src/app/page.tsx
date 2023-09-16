import Collection from "@/components/Collection";
import Deals from "@/components/Deals";
import Footer from "@/components/Footer";
import ProductListing from "@/components/Furniture";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <Collection />
      <ProductListing  title={"Furniture"} data={"furniture"}/>
      <ProductListing  title={"Women's"} data={"women"} />
      <ProductListing  title={"Men's"} data={"men"} />
      <Deals />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
