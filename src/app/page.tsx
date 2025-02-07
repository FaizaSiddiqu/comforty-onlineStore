
"use client";
import React from "react";
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import PopularStyle from "../Components/popularStyle";
import  TopProduct from "../Components/TopProducts/page";
import Logos from '../Components/Logos';
import Catagory from '../Components/Catagory';



export default function Home() {
  return (
    <div>
      <Navbar />
     <Hero />
     <Logos />
     < Catagory />
     <TopProduct />
     
     <PopularStyle />
     <Footer />
      
      
    </div>
  );
};


