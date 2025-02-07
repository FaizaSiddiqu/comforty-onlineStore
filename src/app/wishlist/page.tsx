// // src/app/wishlist/page.tsx
// "use client";

// import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
// import { useWishlist } from "../context/wishlistContext";
// import Link from "next/link";

// const WishlistPage = () => {
//   const { wishlist } = useWishlist();

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold mb-6">Your Wishlist</h1>
//       {wishlist.length === 0 ? (
//         <p>Your wishlist is empty.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {wishlist.map((product: { _id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; description: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; price: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; }) => (
//             <div
//               key={product._id}
//               className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
//             >
//               <h2 className="text-lg font-semibold">{product.title}</h2>
//               <p className="text-gray-500 mt-2">{product.description}</p>
//               <p className="text-lg font-semibold mt-2">${product.price}</p>
//             </div>
//           ))}
//         </div>
//       )}
//       <Link
//         href="/"
//         className="mt-4 inline-block bg-teal-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-teal-900 transition"
//       >
//         Continue Shopping
//       </Link>
//     </div>
//   );
// };

// export default WishlistPage;




"use client";

import { useWishlist } from "../context/wishlistContext";
import Link from "next/link";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
}

const WishlistPage = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((product: Product) => (
            <div
              key={product._id}
              className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
            >
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-500 mt-2">{product.description}</p>
              <p className="text-lg font-semibold mt-2">${product.price}</p>
            </div>
          ))}
        </div>
      )}
      <Link
        href="/"
        className="mt-4 inline-block bg-teal-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-teal-900 transition"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default WishlistPage;
