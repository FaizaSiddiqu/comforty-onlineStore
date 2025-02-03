"use client";
import React from "react";
import Image from "next/image";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";



const ContactUs = () => {
  return (
    <div>
<Navbar />
   
    <div className="bg-white py-12 ">
      <div className="container mx-auto px-4 ">
        <h2 className="text-center text-2xl font-bold mb-4">Get In Touch With Us</h2>
        <p className="text-center text-gray-600 mb-8">
          For more information about our products & services, please feel free to drop us an email. Our staff is always here to help you out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">Address</h3>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
            <div>
              <h3 className="font-bold">Phone</h3>
              <p>Mobile: +1 (845) 546-6789</p>
              <p>Hotline: +1 (845) 456-8798</p>
            </div>
            <div>
              <h3 className="font-bold">Working Time</h3>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium" htmlFor="name">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border rounded-md px-4 py-2"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium" htmlFor="email">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border rounded-md px-4 py-2"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full border rounded-md px-4 py-2"
                  placeholder="This is an optional"
                />
              </div>
              <div>
                <label className="block text-sm font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full border rounded-md px-4 py-2"
                  placeholder="Hi, I'd like to ask about..."
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white font-bold py-2 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Footer Information */}
        <div className="mt-20 border-t pt-16 pb-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-slate-200">
          <div className="flex flex-col items-center space-y-2">
            <Image src="/trophy.png" alt="High Quality" width={60} height={60} />
            <h3 className="font-bold text-lg">High Quality</h3>
            <p className="text-gray-600">Crafted from top materials</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Image src="/Group.png" alt="Warranty Protection" width={60} height={60} />
            <h3 className="font-bold text-lg">Warranty Protection</h3>
            <p className="text-gray-600">Over 2 years</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Image
              src="/customer-support.png"
              alt="24 / 7 Support"
              width={60}
              height={60}
            />
            <h3 className="font-bold text-lg">24 / 7 Support</h3>
            <p className="text-gray-600">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ContactUs;
