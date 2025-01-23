"use client";

import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "../../../../types/products";
import { allProducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  // Add to Cart functionality
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} has been added to your cart!`);
  };

  // Remove from Cart functionality
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
    alert("Item has been removed from your cart!");
  };

  // Fetch products from Sanity
  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(allProducts);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Our Products</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
          >
            <Link href={`/OurProducts/${product.slug?.current}`}>
              <div>
                <h2 className="text-lg font-semibold">{product.title}</h2>
                {product.image && (
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover rounded-md"
                  />
                )}
                <p className="text-gray-500 mt-2">{product.description}</p>
                <p className="text-lg font-semibold mt-2">
                  ${product.price}
                  {product.priceWithoutDiscount && (
                    <span className="text-sm text-red-600 line-through ml-2">
                      ${product.priceWithoutDiscount}
                    </span>
                  )}
                </p>
                {product.badge && (
                  <span className="text-sm text-green-600">{product.badge}</span>
                )}
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-slate-400 text-black px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>

            {/* Add to Cart Button */}
            <button
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-800 transition"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
{/* Cart Summary */}
<div className="mt-8 p-6 bg-slate-100 rounded-lg shadow-md">
  <h2 className="text-lg font-bold mb-4 text-center">Cart Summary</h2>
  {cart.length > 0 ? (
    <ul className="space-y-4">
      {cart.map((item, index) => (
        <li
          key={index}
          className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
        >
          <div className="flex items-center gap-4">
            {item.image && (
              <Image
                src={urlFor(item.image).url()}
                alt={item.title}
                width={50}
                height={50}
                className="rounded-md"
              />
            )}
            <div>
              <p className="font-medium text-slate-900">{item.title}</p>
              <p className="text-sm text-blue-600">${item.price.toFixed(2)}</p>
              <p className="text-xs text-gray-600 mt-1">{item.description}</p>
            </div>
          </div>
          {/* Remove from Cart Button */}
          <button
            className="bg-red-600 text-white py-1 px-4 rounded-md hover:bg-red-800 transition"
            onClick={() => removeFromCart(item._id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-black text-center">Your cart is empty. Please add products.</p>
  )}
</div>

    </div>
  );
};

export default AllProducts;
