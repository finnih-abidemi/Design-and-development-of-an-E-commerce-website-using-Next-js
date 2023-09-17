import { createContext, useEffect, useState } from "react";

interface UserContextType {
  user: any;
}

export const UserContext = createContext(null);

export const UserProvider: any = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [cartItem, setCartItem] = useState<any>([]);
  const [allProducts, setAllProducts] = useState<any>([]);
  const [searchResult, setSearchResult] = useState<any>([]);

  useEffect(() => {
    const getProduct = async () => {
      setAllProducts([]);
      const furnitureData = await fetch("/furniture.json");
      const furniture = await furnitureData.json();
      furniture.forEach((item: any) => {
        item.category = "furniture";
        setAllProducts((prev: any) => [...prev, item]);
      });

      const menData = await fetch("/men.json");
      const men = await menData.json();
      men.forEach((item: any) => {
        item.category = "men";
        setAllProducts((prev: any) => [...prev, item]);
      });

      const womenData = await fetch("/women.json");
      const women = await womenData.json();
      women.forEach((item: any) => {
        item.category = "women";
        setAllProducts((prev: any) => [...prev, item]);
      });
    };

    getProduct();

    const storedUserData = localStorage.getItem("Alloy_user");

    if (storedUserData) {
      try {
        const parsedUserData = JSON.parse(storedUserData);
        setUser(parsedUserData);
        setCartItem(parsedUserData.cartItems);
      } catch (error) {
        console.error("Error parsing stored user data:", error);
      }
    }
  }, []);

  const pass_value = {
    user,
    setUser,
    cartItem,
    setCartItem,
    setAllProducts,
    allProducts,
    searchResult,
    setSearchResult,
  };

  return (
    <UserContext.Provider value={pass_value}>{children}</UserContext.Provider>
  );
};
