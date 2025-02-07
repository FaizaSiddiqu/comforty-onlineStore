// src/app/context/CartContext.tsx
"use client";

import { createContext, useContext, useState } from "react";
import { Product } from "../../../types/products";

// Define CartContextType interface
interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
}

// Create context with proper type
const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook with error handling
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
