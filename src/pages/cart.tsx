import { urlFor } from '@/sanity/lib/image'
import React from 'react'
import Image from 'next/image'
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const CartPage = () => {
    const cartItems: any[] = []; // Define your cart items array here

    function removeFromCart(_id: any): void {
        throw new Error('Function not implemented.')
    }

  return (
    <div>
      {/* Cart Summary */}
        {cartItems.length > 0 ? (
        <>
          <h2 className="text-lg font-bold mb-4 text-center">Cart Summary</h2>
          <ul className="space-y-4">
            {cartItems.map((item: { image: SanityImageSource; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<React.AwaitedReactNode> | null | undefined; price: number; description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; _id: any; }, index: React.Key | null | undefined) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
              >
                <div className="flex items-center gap-4">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={typeof item.title === 'string' ? item.title : ''}
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
        </>
        ) : (
          <p className="text-black text-center">Your cart is empty. Please add products.</p>
        )}
    </div>
  );
}
export default CartPage

