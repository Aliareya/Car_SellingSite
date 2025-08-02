import { createContext , useContext , useState } from "react";

const ShopDataContext = createContext();

export const ShopDataProvider = ({ children }) => {
  const year = ["2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015"];
  const color = ["red", "blue", "green", "black", "white", "yellow", "pink", "purple"];
  const brands = ["benz","tesla","ford","tesla","toyota","nissan","bmw"];
  const category = ["luxury","sports","electric","hybrid","sedan","suv","hatchback","convertible"];
  const price = ["0-2000", "2000-5000", "5000-70000", "70000-20000", "20000+"];
  const sortOptions = ["Default","Price: Low to High","Price: High to Low","Newest","Oldest"];




  return (
    <ShopDataContext.Provider value={{year, category ,color ,brands ,price ,sortOptions}}>
      {children}
    </ShopDataContext.Provider>
  );
}

export const useShopData = () => {
  const context = useContext(ShopDataContext);
  if (!context) {
    throw new Error("useShopData must be used within a ShopDataProvider");
  }
  return context;
}