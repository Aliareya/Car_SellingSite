import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  
  const [WishlistCar, setWishlistCar] = useState(() => {
    const stored = localStorage.getItem("WishlistCar");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("WishlistCar", JSON.stringify(WishlistCar));
  }, [WishlistCar]);

  return (
    <WishlistContext.Provider value={{ WishlistCar, setWishlistCar }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  return useContext(WishlistContext);
};
