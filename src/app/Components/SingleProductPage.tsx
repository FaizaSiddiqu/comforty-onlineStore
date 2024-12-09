import React from "react";
import Image from "next/image";

const Product = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Product Display Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <Image
              src="/Image-5.png" 
              alt="Library Stool Chair"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Library Stool Chair</h2>
            <p className="text-lg text-teal-500 font-semibold mt-4">$20.00 USD</p>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt arcu vel enim aliquam, sed aliquet risus consectetur.
            </p>
            <button className="bg-teal-500 text-white font-bold py-2 px-4 rounded-md mt-6">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Featured Products Section */}
        <div className="mt-16">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">Featured Products</h3>
            <a href="#" className="text-teal-500 font-medium">
              View all
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            {/* Repeat this block for each product */}
            <div className="text-center">
              <Image
                src="/Group2.png" 
                alt="Library Chair"
                width={150}
                height={150}
                className="rounded-lg"
              />
              <h4 className="text-sm font-semibold mt-2">Library Stool Chair</h4>
              <p className="text-gray-500 text-sm">$20</p>
            </div>
            <div className="text-center">
              <Image
                src="/Image-4.png" 
                alt="Library Chair"
                width={150}
                height={150}
                className="rounded-lg"
              />
              <h4 className="text-sm font-semibold mt-2">Library Chair</h4>
              <p className="text-gray-500 text-sm">$25</p>
            </div>
            <div className="text-center">
              <Image
                src="/Rectangle.jpg" 
                alt="Library Chair"
                width={150}
                height={150}
                className="rounded-lg"
              />
              <h4 className="text-sm font-semibold mt-2">Classic Chair</h4>
              <p className="text-gray-500 text-sm">$30</p>
            </div>
            <div className="text-center">
              <Image
                src="/Frame.png" 
                alt="Library Chair"
                width={150}
                height={150}
                className="rounded-lg"
              />
              <h4 className="text-sm font-semibold mt-2">Modern Chair</h4>
              <p className="text-gray-500 text-sm">$40</p>
            </div>
            <div className="text-center">
              <Image
                src="/chair-5.png" 
                alt="Library Chair"
                width={150}
                height={150}
                className="rounded-lg"
              />
              <h4 className="text-sm font-semibold mt-2">Designer Chair</h4>
              <p className="text-gray-500 text-sm">$35</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
