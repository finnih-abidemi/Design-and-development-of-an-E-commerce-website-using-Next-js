import { createContext, useEffect, useState } from 'react';

interface UserContextType {
  user: any; 
}

export const UserContext = createContext(null);

export const UserProvider: any = ({ children }: any) => {
  const [user, setUser] = useState<any>(null); 
  const [cartItem, setCartItem] = useState<any>([]);

  useEffect(() => {
    const storedUserData = localStorage.getItem('Alloy_user');

    if (storedUserData) {
      try {
        const parsedUserData = JSON.parse(storedUserData);
        setUser(parsedUserData);
        setCartItem(parsedUserData.cartItems);
      } catch (error) {
        console.error('Error parsing stored user data:', error);
      }
    }
  }, []); 

  const pass_value = { user, setUser, cartItem, setCartItem };

  return (
    <UserContext.Provider value={pass_value}>
      {children}
    </UserContext.Provider>
  );
};
