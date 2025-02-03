// src/components/Footer.tsx
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image src="/Logo.png" alt="Comforty Logo" width={30} height={30} style={{width:"auto", height: "auto"}} />
              <h2 className="text-xl font-bold">Comforty</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
              Cras egestas purus.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <Image src="/Twitter.webp" alt="Twitter" width={24} height={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <Image src="/Insta.png" alt="Instagram" width={24} height={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <Image src="/Youtube.png" alt="YouTube" width={24} height={24} />
              </a>
            </div>
          </div>

          {/* Category Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Category</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Sofa</li>
              <li>Armchair</li>
              <li>Wing Chair</li>
              <li>Desk Chair</li>
              <li>Wooden Chair</li>
              <li>Park Bench</li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Help & Support</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Help</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-2 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
              <button className="px-4 bg-indigo-500 text-white rounded-r-md hover:bg-indigo-600">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 flex flex-col lg:flex-row justify-between items-center text-sm text-gray-600">
          <p>© 2021 – Blog – Designed & Developed by Faiza Siddiqui</p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <Image src="/paypal.png" alt="PayPal" width={40} height={24} style={{width: "auto", height:"auto"}} />
            <Image src="/visa.png" alt="Visa" width={40} height={24} style={{width: "auto" , height: "auto"}}/>
          </div>
        </div>
      </div>
    </footer>
  );
}
