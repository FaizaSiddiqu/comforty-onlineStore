'use client';

import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div>
<Navbar />
   
    <div className="container mx-auto px-6 lg:px-16 py-10">
        
      {/* About Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-teal-700 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">About Us - Comforty</h2>
          <p className="text-base leading-relaxed p-6">
            At Comforty, we believe that the right chair can transform any space. 
            Our collection blends timeless design with innovation, crafted with precision. 
            Discover chairs that seamlessly blend style with technology.
          </p>
          <button className="mt-10 bg-white text-teal-700 px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
            View Collection
          </button>
        </div>
        <div>
          <Image 
            src="/Image-4.png" 
            alt="Chair Image" 
            width={500} 
            height={350} 
            className="rounded-lg object-cover w-full h-[300px] md:h-[350px]" 
          />
        </div>
      </div>

      {/* Brand Difference Section */}
      <div className="text-center mt-28">
        <h3 className="text-2xl md:text-3xl font-bold mb-8">What Makes Our Brand Different</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {image: "/Delivery.png" , title: "Next day as standard", desc: "Order before 3PM  and get your order the Next Day standard." },
            { image: "/Checkmark.png", title: "Made by true artisans", desc: "Handmade Crafted goods made with real passion and creaftmanship." },
            { image: "/Purchase.png", title: "Unbeatable prices", desc: "For our materials and quality you won't find better prices anywhere" },
            { image: "/Sprout.png", title: "Recycled packaging", desc: "We use 100% recycled to ensure our footprint is more manageable." },
          ].map((item, index) => (
            <div key={index} className="bg-gray-100 p-5 rounded-lg text-center flex flex-col items-center">
                   <Image 
                src={item.image} 
                alt={item.title}
                width={25} 
                height={25} 
                className="mb-4" 
              />
              <h4 className="font-semibold text-base text-teal-600">{item.title}</h4>
              <p className="text-sm text-teal-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Products Section */}
      <div className="mt-20">
        <h3 className="text-2xl md:text-3xl font-bold mb-8">Our Popular Products</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { img: "/Large.png", name: "The Popular Suede Sofa", price: "$299.00" },
            { img: "/black.png", name: "The Dandy Chair", price: "$60.00" },
            { img: "/gray.png", name: "The Dandy Chair", price: "$90.00" },
          ].map((product, index) => (
            <div key={index} className="bg-gray-100 p-5 rounded-lg text-center">
              <Image 
                src={product.img} 
                alt={product.name}
                width={500} 
                height={350} 
                className="rounded-lg object-cover w-full h-[250px] md:h-[300px]" 
              />
              <h4 className="mt-4 font-semibold text-lg">{product.name}</h4>
              <p className="text-gray-600 text-base">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}
