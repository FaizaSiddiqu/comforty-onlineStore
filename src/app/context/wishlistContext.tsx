"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// 🔹 Product Type Define
export type Product = {
  _id: string;
  name: string;
  price: number;
  image: string;
  title: string; // Updated to string
  description: string; // Updated to string
  priceWithoutDiscount?: number; // Updated to number (optional)
  badge?: string; // Updated to string (optional)
  slug: { current: string }; // Updated to object with `current` property
  tags: string[]; // Updated to array of strings
};

// 🔹 Wishlist Context Type Define
type WishlistContextType = {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
};

// 🔹 Context Create (NULL initially)
const WishlistContext = createContext<WishlistContextType | null>(null);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  // 🔹 Add to Wishlist
  const addToWishlist = (product: Product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };

  // 🔹 Remove from Wishlist
  const removeFromWishlist = (productId: string) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item._id !== productId)
    );
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// 🔹 Custom Hook for Wishlist
export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};