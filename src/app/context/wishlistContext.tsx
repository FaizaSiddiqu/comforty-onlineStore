"use client";

import { createContext, useContext, useState } from "react";

// 🔹 Product Type Define
export type Product = {
  tags: any;
  slug: any;
  badge: any;
  priceWithoutDiscount: React.ReactNode | Iterable<React.ReactNode>;
  title: React.ReactNode | Iterable<React.ReactNode>;
  description: React.ReactNode | Iterable<React.ReactNode>;
  _id: string;
  name: string;
  price: number;
  image: string;
};

// 🔹 Wishlist Context Type Define
type WishlistContextType = {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
};

// 🔹 Context Create (NULL initially)
const WishlistContext = createContext<WishlistContextType | null>(null);

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
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
