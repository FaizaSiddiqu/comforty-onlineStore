"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const wishlist = []; // Define the wishlist variable

  return (
    <header>
      {/* Top Header */}
      <div className="bg-black text-white py-2 text-sm">
        <div className="container mx-auto flex justify-between items-center px-6 lg:px-10">
          <p>Free Shipping On Orders Over $50</p>
          <div className="space-x-4 flex items-center">
            <ClerkProvider>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </ClerkProvider>
            <span>|</span>
            <Link href="/FAQ" className="hover:underline">
              FAQs
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              Need Help?
            </Link>
          </div>
        </div>
      </div>

      {/* Middle Header */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto flex justify-between items-center px-6 lg:px-10">
          <div className="flex items-center space-x-3">
            <Image src="/Logo.png" alt="Comforty-Logo" width={40} height={40} />
            <h1 className="text-2xl font-bold text-gray-800">Comforty</h1>
          </div>
          <div className="text-gray-600">
            <p>
              Contact:{" "}
              <Link
                href="tel:555-555-0191"
                className="text-indigo-600 hover:underline"
              >
                555-555-0191
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6 lg:px-4 py-4">
          <button
            className="block lg:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <ul
            className={`lg:flex lg:space-x-5 text-gray-700 font-semibold absolute lg:static w-full lg:w-auto bg-white lg:bg-transparent p-6 lg:p-0 transition-all duration-300 ease-in-out ${
              isMenuOpen ? "top-16 left-0" : "top-[-300px]"
            }`}
          >
            <li>
              <Link
                href="/"
                className="block py-2 lg:py-0 lg:inline-block bg-teal-700 text-white hover:text-teal-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/contactus"
                className="block py-2 lg:py-0 lg:inline-block hover:text-teal-600"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="block py-2 lg:py-0 lg:inline-block hover:text-teal-600"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 lg:py-0 lg:inline-block hover:text-teal-600"
              >
                About
              </Link>
            </li>
            <li>
            <Link href="/wishlist" className="text-gray-700 hover:text-teal-600">
  Wishlist 
</Link>
</li>
            <li className="relative group">
              <span className="cursor-pointer flex items-center hover:text-teal-600">
                Pages
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
              <ul className="absolute hidden group-hover:block bg-white p-2 space-y-2 rounded shadow list-disc pl-5">
                <li>
                  <Link
                    href="/privacyPolicy"
                    className="text-gray-800 hover:text-teal-600"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/TermsAndConditions"
                    className="text-gray-800 hover:text-teal-600"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shipping-information"
                    className="text-gray-800 hover:text-teal-600"
                  >
                    Shipping Information
                  </Link>
                </li>
                <li>
                  <Link
                    href="/return-policy"
                    className="text-gray-800 hover:text-teal-600"
                  >
                    Return Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/payment"
                    className="text-gray-800 hover:text-teal-600"
                  >
                    Payment
                  </Link>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <span className="cursor-pointer flex items-center hover:text-teal-600">
                Admin
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
              <ul className="absolute hidden group-hover:block bg-white p-2 space-y-2 rounded shadow list-disc pl-5">
                <li>
                  <Link
                    href="/admin/dashboard"
                    className="text-gray-800 hover:text-teal-600"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/orders"
                    className="text-gray-800 hover:text-teal-600"
                  >
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/products"
                    className="text-gray-800 hover:text-teal-600"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/users"
                    className="text-gray-800 hover:text-teal-600"
                  >
                    Users
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/settings"
                    className="text-gray-800 hover:text-teal-600"
                  >
                    Settings
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <div className="hidden lg:flex space-x-4">
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent outline-none text-gray-700 w-full"
              />
              <button className="text-gray-600 hover:text-gray-800">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m2.1-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                  />
                </svg>
              </button>
            </div>

            <Link href="/cart">
              <button className="flex items-center bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600">
                <Image
                  src="/Images/group-1.png"
                  alt="Cart"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Cart
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
