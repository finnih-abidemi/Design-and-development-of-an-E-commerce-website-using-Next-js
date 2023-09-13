import Collection from "@/components/Collection";
import Deals from "@/components/Deals";
import Footer from "@/components/Footer";
import Furniture from "@/components/Furniture";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <Collection />
      <Furniture  title={"Furniture"} data={"furniture"}/>
      {/* <Furniture  title={"Accessories"} data={"furniture"}/> */}
      <Furniture  title={"Women's"} data={"women"} />
      <Furniture  title={"Men's"} data={"men"} />
      <Deals />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
