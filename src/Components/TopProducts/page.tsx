
// "use client";

// import { client } from "@/sanity/lib/client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { Product } from "../../../types/products";
// import { allProducts } from "@/sanity/lib/queries";
// import { urlFor } from "@/sanity/lib/image";
// import Link from "next/link";
// import Swal from "sweetalert2";
// import  { useRouter } from "next/navigation";
// import { useWishlist } from "@/app/context/wishlistContext";

// const AllProducts = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<Product[]>([]);
//   const router = useRouter()
//   const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

//   // Add to Cart functionality
//   const addToCart = (product: Product) => {
//     setCart((prevCart) => [...prevCart, product]);
//     Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: `${product.title} has been addedd to your cart!`,
//             showConfirmButton: false,
//             timer: 1500
//           })
//   };

//   // Remove from Cart functionality
//   const removeFromCart = (productId: string) => {
//     setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
//     Swal.fire({
//       position: "top-end",
//       icon: "success",
//       title: `Item has been removed from your cart!`,
//       showConfirmButton: false,
//       timer: 1500
//     })
//   };

//   // Navigate to Checkout Page
//   const proceedToCheckout = () => {
//     localStorage.setItem("cartItems", JSON.stringify(cart));
//     router.push("/Checkout");
//   };

//   // Check if product is in wishlist
//   const isInWishlist = (productId: string) => {
//     return wishlist.some((item: { _id: string; }) => item._id === productId);
//   };
  
//   // Toggle Wishlist
//   const toggleWishlist = (product: Product) => {
//     if (isInWishlist(product._id)) {
//       removeFromWishlist(product._id);
//       Swal.fire({
//         position: "top-end",
//         icon: "success",
//         title: `${product.title} removed from wishlist!`,
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     } else {
//       addToWishlist(product);
//       Swal.fire({
//         position: "top-end",
//         icon: "success",
//         title: `${product.title} added to wishlist!`,
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     }
//   };

//   // Fetch products from Sanity
//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const fetchedProducts: Product[] = await client.fetch(allProducts);
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     }
//     fetchProducts();
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold mb-6 text-center">Our Products</h1>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
//           >

//             {/* Wishlist Icon */}
//   {/* <button
//     onClick={() => toggleWishlist(product)}
//     className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
//   >
//     {isInWishlist(product._id) ? (
//       <span className="text-red-500">❤️</span>
//     ) : (
//       <span className="text-gray-500">🤍</span>
//     )}
//   </button> */}

//   {/* Product Details */}
//             <Link href={`/OurProducts/${product.slug?.current}`}>
//               <div>
//                 <h2 className="text-lg font-semibold">{product.title}</h2>
//                 {product.image && (
//                   <Image
//                     src={urlFor(product.image).url()}
//                     alt={product.title}
//                     width={200}
//                     height={200}
//                     className="w-full h-48 object-cover rounded-md"
//                   />
//                 )}
//                 <p className="text-gray-500 mt-2">{product.description}</p>
//                 <p className="text-lg font-semibold mt-2">
//                   ${product.price}
//                   {product.priceWithoutDiscount && (
//                     <span className="text-sm text-red-600 line-through ml-2">
//                       ${product.priceWithoutDiscount}
//                     </span>
//                   )}
//                 </p>
//                 {product.badge && (
//                   <span className="text-sm text-green-600">{product.badge}</span>
//                 )}
//                 <div className="mt-2 flex flex-wrap gap-2">
//                   {product.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="text-xs bg-slate-400 text-black px-2 py-1 rounded-md"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </Link>

//             {/* Add to Cart Button */}
//             <button
//               className="mt-4 w-full bg-teal-600 text-white font-semibold py-2 rounded-md hover:bg-teal-900 transition"
//               onClick={() => addToCart(product)}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
// {/* Cart Summary */}
// <div className="mt-8 p-6 bg-slate-100 rounded-lg shadow-md">
//   <h2 className="text-lg font-bold mb-4 text-center">Cart Summary</h2>
//   {cart.length > 0 ? (
//     <ul className="space-y-4">
//       {cart.map((item, index) => (
//         <li
//           key={index}
//           className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
//         >
//           <div className="flex items-center gap-4">
//             {item.image && (
//               <Image
//                 src={urlFor(item.image).url()}
//                 alt={item.title}
//                 width={50}
//                 height={50}
//                 className="rounded-md"
//               />
//             )}
//             <div>
//               <p className="font-medium text-slate-900">{item.title}</p>
//               <p className="text-sm text-blue-600">${item.price.toFixed(2)}</p>
//               <p className="text-xs text-gray-600 mt-1">{item.description}</p>
//             </div>
//           </div>
//           {/* Remove from Cart Button */}
//           <button
//             className="bg-red-600 text-white py-1 px-4 rounded-md hover:bg-red-800 transition"
//             onClick={() => removeFromCart(item._id)}
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   ) : (
//     <p className="text-black text-center">Your cart is empty. Please add products.</p>
//   )}

//     {/* Proceed to Checkout Button */}
//     {cart.length > 0 && (
//       <button
//         className="mt-6 w-full bg-green-600 text-white font-semibold py-3 rounded-md hover:bg-green-800 transition"
//         onClick={proceedToCheckout}
//       >
//         Proceed to Checkout
//       </button>
//     )}
// </div>
//     </div>
//   );
//  };

//  export default AllProducts;







// "use client";

// import { client } from "@/sanity/lib/client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { Product } from "../../../types/products";
// import { allProducts } from "@/sanity/lib/queries";
// import { urlFor } from "@/sanity/lib/image";
// import Link from "next/link";
// import Swal from "sweetalert2";
// import { useRouter } from "next/navigation";
// import { useWishlist } from "@/app/context/wishlistContext";

// const AllProducts = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<Product[]>([]);
//   const router = useRouter();
//   const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

//   // Add to Cart functionality
//   const addToCart = (product: Product) => {
//     setCart((prevCart) => [...prevCart, product]);
//     Swal.fire({
//       position: "top-end",
//       icon: "success",
//       title: `${product.title} has been added to your cart!`,
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   };

//   // Remove from Cart functionality
//   const removeFromCart = (productId: string) => {
//     setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
//     Swal.fire({
//       position: "top-end",
//       icon: "success",
//       title: `Item has been removed from your cart!`,
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   };

//   // Navigate to Checkout Page
//   const proceedToCheckout = () => {
//     localStorage.setItem("cartItems", JSON.stringify(cart));
//     router.push("/Checkout");
//   };

//   // Check if product is in wishlist
//   const isInWishlist = (productId: string) => {
//     return wishlist.some((item: { _id: string }) => item._id === productId);
//   };

//   // Toggle Wishlist
//   const toggleWishlist = (product: Product) => {
//     if (isInWishlist(product._id)) {
//       removeFromWishlist(product._id);
//       Swal.fire({
//         position: "top-end",
//         icon: "success",
//         title: `${product.title} removed from wishlist!`,
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     } else {
//       addToWishlist(product);
//       Swal.fire({
//         position: "top-end",
//         icon: "success",
//         title: `${product.title} added to wishlist!`,
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     }
//   };

//   // Fetch products from Sanity
//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const fetchedProducts: Product[] = await client.fetch(allProducts);
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     }
//     fetchProducts();
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold mb-6 text-center">Our Products</h1>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 relative"
//           >
//             {/* Wishlist Button */}
//             <button
//               onClick={() => toggleWishlist(product)}
//               className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
//             >
//               {isInWishlist(product._id) ? (
//                 <span className="text-red-500">❤️</span>
//               ) : (
//                 <span className="text-gray-500">🤍</span>
//               )}
//             </button>

//             {/* Product Details */}
//             <Link href={`/OurProducts/${product.slug?.current}`}>
//               <div>
//                 <h2 className="text-lg font-semibold">{product.title}</h2>
//                 {product.image && (
//                   <Image
//                     src={urlFor(product.image).url()}
//                     alt={product.title}
//                     width={200}
//                     height={200}
//                     className="w-full h-48 object-cover rounded-md"
//                   />
//                 )}
//                 <p className="text-gray-500 mt-2">{product.description}</p>
//                 <p className="text-lg font-semibold mt-2">
//                   ${product.price}
//                   {product.priceWithoutDiscount && (
//                     <span className="text-sm text-red-600 line-through ml-2">
//                       ${product.priceWithoutDiscount}
//                     </span>
//                   )}
//                 </p>
//                 {product.badge && (
//                   <span className="text-sm text-green-600">{product.badge}</span>
//                 )}
//                 <div className="mt-2 flex flex-wrap gap-2">
//                   {product.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="text-xs bg-slate-400 text-black px-2 py-1 rounded-md"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </Link>

//             {/* Add to Cart Button */}
//             <button
//               className="mt-4 w-full bg-teal-600 text-white font-semibold py-2 rounded-md hover:bg-teal-900 transition"
//               onClick={() => addToCart(product)}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllProducts;








"use client";

import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "../../../types/products";
import { allProducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useWishlist } from "../../app/context/wishlistContext"; // Import Wishlist Context

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const router = useRouter();

  // Wishlist Context
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  // Add to Cart functionality
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${product.title} has been added to your cart!`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  // Remove from Cart functionality
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Item has been removed from your cart!`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  // Navigate to Checkout Page
  const proceedToCheckout = () => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
    router.push("/Checkout");
  };

  // Check if product is in wishlist
  const isInWishlist = (productId: string) => {
    return wishlist.some((item: { _id: string }) => item._id === productId);
  };

  // Toggle Wishlist
  const toggleWishlist = (product: Product) => {
    if (isInWishlist(product._id)) {
      removeFromWishlist(product._id);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${product.title} removed from wishlist!`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      addToWishlist(product);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${product.title} added to wishlist!`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
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
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 relative"
          >
            {/* Wishlist Icon */}
            <button
              onClick={() => toggleWishlist(product)}
              className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
            >
              {isInWishlist(product._id) ? (
                <span className="text-red-500">❤️</span> // Filled heart if in wishlist
              ) : (
                <span className="text-gray-500">🤍</span> // Empty heart if not in wishlist
              )}
            </button>

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
              className="mt-4 w-full bg-teal-600 text-white font-semibold py-2 rounded-md hover:bg-teal-900 transition"
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

        {/* Proceed to Checkout Button */}
        {cart.length > 0 && (
          <button
            className="mt-6 w-full bg-green-600 text-white font-semibold py-3 rounded-md hover:bg-green-800 transition"
            onClick={proceedToCheckout}
          >
            Proceed to Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default AllProducts;