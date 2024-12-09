"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  // State to toggle menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Header */}
      <div className="bg-black text-white py-2 text-sm">
        <div className="container mx-auto flex justify-between items-center px-6 lg:px-20">
          <p>Free Shipping On Orders Over $50</p>
          <div className="space-x-4">
            <a href="#" className="hover:underline">Sign In</a>
            <span>|</span>
            <a href="#" className="hover:underline">FAQs</a>
            <span>|</span>
            <a href="#" className="hover:underline">Need Help?</a>
          </div>
        </div>
      </div>

      {/* Middle Header */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto flex justify-between items-center px-6 lg:px-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 ml-0">
            <Image src="/logo.png" alt="Comforty Logo" width={40} height={40} />
            <h1 className="text-2xl font-bold text-gray-800">Comforty</h1>
          </div>
          {/* Contact Info */}
          <div className="text-gray-600">
            <p>Contact: <a href="tel:555-555-0191" className="text-indigo-600 hover:underline">555-555-0191</a></p>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6 lg:px-20 py-4">
          
          {/* Hamburger Icon */}
          <button 
            className="block lg:hidden focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          {/* Navigation Links */}
          <ul className={`flex-col lg:flex-row lg:flex space-x-8 text-gray-700 font-semibold absolute lg:static w-full lg:w-auto bg-white lg:bg-transparent p-6 lg:p-0 transition-all duration-300 ease-in-out ${isMenuOpen ? 'top-16 left-0' : 'top-[-300px]'}`}>
            <li><a href="/" className="block py-2 lg:py-0 lg:inline-block bg-teal-600 text-white">Home</a></li>
            <li><a href="/products" className="block py-2 lg:py-0 lg:inline-block hover:text-teal-600">Shop</a></li>
            <li><a href="/Allproducts" className="block py-2 lg:py-0 lg:inline-block hover:text-teal-600">Product</a></li>
            <li><a href="#" className="block py-2 lg:py-0 lg:inline-block hover:text-teal-600">Pages</a></li>
            <li><a href="/about" className="block py-2 lg:py-0 lg:inline-block hover:text-teal-600">About</a></li>
          </ul>

          {/* Cart Button */}
          <div className="hidden lg:block">
            <button className="flex items-center bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600">
              <Image src="/Group-1.png" alt="Cart" width={20} height={20} className="mr-2" />
              <Link href="/cart">
              Cart
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
