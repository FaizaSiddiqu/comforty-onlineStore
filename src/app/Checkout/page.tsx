"use client";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const Checkout = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch("/api/checkout_session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cart),
    });
    const session = await response.json();
    stripe?.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <button
        onClick={handleCheckout}
        className="bg-blue-600 text-white p-3 rounded"
      >
        Pay with Stripe
      </button>
    </div>
  );
};

export default Checkout;
