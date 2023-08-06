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
      <Header />
      <Hero />
      <Collection />
      <Furniture />
      <Deals />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
