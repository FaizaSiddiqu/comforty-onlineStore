import React from 'react'
import Cart from './Components/Cart'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Contactus from './Components/Contactus'
import Hero from './Components/Hero'
import SingleProductPage from './Components/SingleProductPage'
import AllProducts from './Components/AllProducts'
import Logos from './Components/Logos'
import Catagory from './Components/Catagory'
import NewProducts from './Components/NewProducts'





export default function Home() {
  return (
    <div>
      <Navbar />
     <Hero />
     <Logos />
     <SingleProductPage />
     < Catagory />
     <NewProducts />
     <AllProducts />
     <Cart />
     <Contactus />
     <Footer />
      
      
    </div>
  );
}

