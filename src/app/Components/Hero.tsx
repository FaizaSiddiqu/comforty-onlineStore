
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';

export default function Hero() {
  return (
    <div>
      
{/* Hero Section */}
<div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-10 ">
{/* Left Side Content */}
<div className="w-full md:w-1/2 space-y-5 text-center md:text-left ml-8">
  <p className="text-xl text-gray-600">Welcome To Chairy</p>
  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
    Best Furniture <br /> Collection for your <br /> interior.
  </h1>
  <div>
<button className="bg-teal-600 text-white py-4 px-6 rounded-md hover:bg-teal-900 transition-all duration-300 flex items-center gap-x-2">
Shop Now
<FaArrowRightLong />
</button>
</div>
</div>

{/* Right Side Image */}
<div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
  <Image 
    src="/chair-1.png" 
    alt="chair" 
    width={434} 
    height={584} 
    className="max-w-full h-auto" 
  />
</div>
</div>

    </div>
  )
}
