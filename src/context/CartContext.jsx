import { useState , createContext , useContext , useEffect } from "react";

const CartContext = createContext();

export const CartProvider =({children})=>{
  const [cart , setCart] = useState(()=>{
    const stored = localStorage.getItem("cartitems");
    return stored ? JSON.parse(stored) : [];
  });

  const [processProduct , setProcessProduct] = useState(()=>{
    const stored = localStorage.getItem("processProduct");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartitems", JSON.stringify(cart));
    localStorage.setItem("processProduct", JSON.stringify(processProduct));
  }, [cart]);

  return(
    <CartContext.Provider value={{cart ,setCart ,processProduct ,setProcessProduct }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = ()=>{
  return useContext(CartContext);
}