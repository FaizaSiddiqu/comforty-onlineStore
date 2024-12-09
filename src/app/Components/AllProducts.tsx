import React from "react";
import Image from "next/image";
import Link from "next/link";

// Array of Products
const products = [
  { id: 1, name: "Library Stool Chair", price: "$20", src: "/Image-4.png", tag: "New" },
  { id: 2, name: "Pink Armchair", price: "$25", src: "/Image-5.png", tag: "New" },
  { id: 3, name: "Orange Chair", price: "$30", src: "/Frame.png", tag: "Sale" },
  { id: 4, name: "White Armchair", price: "$35", src: "/Image.png", tag: "" },
  { id: 5, name: "Wooden Chair Set", price: "$40", src: "/Image-5.png", tag: "" },
  { id: 6, name: "Grey Chair", price: "$20", src: "/Image-1.png", tag: "New" },
  { id: 7, name: "Classic Chair", price: "$30", src: "/Group2.png", tag: "Sale" },
  { id: 8, name: "Designer Chair", price: "$45", src: "/Image-4.png", tag: "Sale" },
  { id: 9, name: "Library White Chair", price: "$20", src: "/Frame2.png", tag: "New" },
  { id: 10, name: "Beige Chair", price: "$50", src: "/Image-5.png", tag: "New" },
  { id: 11, name: "Bright Orange Chair", price: "$30", src: "/Frame.png", tag: "" },
  { id: 12, name: "Swivel Office Chair", price: "$60", src: "/Rectangle.jpg", tag: "" },
];

const ProductListingPage = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <div className="relative border p-4 rounded-lg hover:shadow-lg cursor-pointer text-center">
                {product.tag && (
                  <span className="absolute top-2 left-2 bg-teal-500 text-white text-xs font-bold py-1 px-2 rounded">
                    {product.tag}
                  </span>
                )}
                <Image
                  src={product.src}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="rounded-md"
                />
                <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                <p className="text-teal-500 text-sm">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
