
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
                <FaRegHeart  className="cursor-pointer"/>
                <AiOutlineDelete className="ml-2 cursor-pointer"/>
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
                <FaRegHeart className="cursor-pointer"/>
                <AiOutlineDelete className="ml-2 cursor-pointer"/>
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

      {/* Footer */}
      {/* <footer className="bg-white mt-10 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between gap-6"> */}
            {/* { Footer Left} */}
            {/* <div>
              <h2 className="text-xl font-bold">Comforty</h2>
              <p className="text-gray-600 mt-2">
                Mauris tristique tortor in arcu volutpat, et feugiat sapien
                placerat.
              </p>
              <div className="flex mt-4 space-x-3">
                <a href="#" className="text-gray-600">
                  <Image src="/icon-facebook.png" alt="Facebook" width={24} height={24} />
                </a>
                <a href="#" className="text-gray-600">
                  <Image src="/icon-twitter.png" alt="Twitter" width={24} height={24} />
                </a>
                <a href="#" className="text-gray-600">
                  <Image src="/icon-instagram.png" alt="Instagram" width={24} height={24} />
                </a>
              </div>
            </div> */}

            {/* Footer Middle */}
            {/* <div className="space-y-2">
              <h3 className="text-lg font-bold">Products</h3>
              <ul className="text-gray-600">
                <li>Library Chair</li>
                <li>Wing Chair</li>
                <li>Lounge Chair</li>
                <li>Rocking Chair</li>
              </ul>
            </div>

            {/* Footer Right */}
            {/* <div>
              <h3 className="text-lg font-bold">Newsletter</h3>
              <p className="text-gray-600">Get the latest news and updates:</p>
              <form className="flex mt-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 border rounded-l-md focus:outline-none"
                />
                <button className="px-4 bg-indigo-500 text-white rounded-r-md hover:bg-indigo-600">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>  */} 
    </div>
  );
}
