"use client";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

export default function Cart() {
  return (
    <div className="bg-gray-100 min-h-screen pt-12">
      {/* Main Cart Section */}
      <div className="container mx-auto mt-10 px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          {/* Cart Items */}
          <div className="bg-white rounded-md shadow-md p-6 lg:w-2/3">
            <h2 className="text-xl font-bold mb-4">Bag</h2>
            {/* Item 1 */}
            <div className="flex items-center border-b pb-4 mb-4">
              <Image
                src="/Frame.png"
                alt="Library Chair"
                width={80}
                height={80}
                className="rounded-md"
              />
              <div className="ml-4 flex-grow">
                <h3 className="text-lg font-semibold">Library Stool Chair</h3>
                <p className="text-sm text-gray-500">High-back Design</p>
                <p className="text-sm text-gray-500">Quantity: 1</p>
                <div className="flex mt-2 ">
                  <FaRegHeart className="cursor-pointer" />
                  <AiOutlineDelete className="ml-2 cursor-pointer" />
                </div>
              </div>
              <p className="text-lg font-semibold">USD 199</p>
            </div>
            {/* Item 2 */}
            <div className="flex items-center">
              <Image
                src="/Frame2.png"
                alt="Library Chair"
                width={80}
                height={80}
                className="rounded-md"
              />
              <div className="ml-4 flex-grow">
                <h3 className="text-lg font-semibold">Library Stool Chair</h3>
                <p className="text-sm text-gray-500">High-back Design</p>
                <p className="text-sm text-gray-500">Quantity: 1</p>
                <div className="flex mt-2">
                  <FaRegHeart className="cursor-pointer" />
                  <AiOutlineDelete className="ml-2 cursor-pointer" />
                </div>
              </div>
              <p className="text-lg font-semibold">USD 199</p>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-white rounded-md shadow-md p-6 lg:w-1/3">
            <h2 className="text-xl font-bold mb-4">Summary</h2>
            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span className="font-semibold">USD 398.00</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Estimated Shipping & Handling</span>
              <span className="font-semibold">Free</span>
            </div>
            <div className="flex justify-between mb-6">
              <span>Total</span>
              <span className="font-bold text-xl">USD 398.00</span>
            </div>
            <button className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
