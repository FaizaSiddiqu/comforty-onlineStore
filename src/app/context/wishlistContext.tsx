// src/app/context/WishlistContext.tsx
"use client";

import { createContext, useContext, useState } from "react";

const WishlistContext = createContext<any>(null);

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlist, setWishlist] = useState<any[]>([]);

  // Add to Wishlist
  const addToWishlist = (product: any) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };

  // Remove from Wishlist
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

export const useWishlist = () => useContext(WishlistContext);