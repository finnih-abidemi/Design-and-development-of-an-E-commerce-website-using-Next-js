import Collection from "@/components/Collection";
import Deals from "@/components/Deals";
import Furniture from "@/components/Furniture";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Collection />
      <Furniture />
      <Deals />
    </>
  );
};

export default Home;
