import React from 'react'
import Image from 'next/image'
import Cart from './Components/Cart'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Contactus from './Components/Contactus'
import Hero from './Components/Hero'
import SingleProductPage from './Components/SingleProductPage'
import AllProducts from './Components/AllProducts'





export default function Home() {
  return (
    <div>
      <Navbar />
     <Hero />
     <AllProducts />
     <SingleProductPage />
      <Cart />
      <Contactus />
      <Footer />
    </div>
  );
}

