
"use client";
import React from "react";
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
// import Contactus from './Components/Contactus';
import Hero from './Components/Hero';
import PopularStyle from "./Components/popularStyle";
import  TopProduct from "@/app/Components/TopProducts/page";
import Logos from './Components/Logos';
import Catagory from './Components/Catagory';


export function Home() {
  return (
    <div>
      <Navbar />
     <Hero />
     <Logos />
     {/* <SingleProductPage /> */}
     < Catagory />
     {/* <NewProducts /> */}
     <TopProduct />
     <PopularStyle />
     {/* <Cart /> */}
     {/* <Contactus /> */}
     <Footer />
      
      
    </div>
  );
}
export default Home;


