"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { sanityFetch } from "../../sanity/lib/fetch";
import { allProducts } from "../../sanity/lib/queries";
import { Product } from "../../../types/products";
import { urlFor } from "../../sanity/lib/image";

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data: Product[] = await sanityFetch<Product[]>({ query: allProducts });
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [router]); // Added router as a dependency

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8 text-teal-700">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: Product) => (
          <div key={product._id} className="border p-4 rounded-lg shadow-lg">
            {product.image && (
              <img
                src={urlFor(product.image).url()} 
                alt={product.title}
                className="w-full h-60 object-contain rounded-md bg-gray-100"
              />
            )}
            <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
            
            <button className="mt-3 bg-teal-600 text-white px-4 py-2 rounded-lg w-full hover:bg-teal-700 transition">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
