"use client"

import { createContext, useState } from 'react';

interface UserContextType {
  user: any; 
}

export const UserContext = createContext(null);

export const UserProvider: any = ({ children }: any) => {
  const [user, setUser] = useState<any>(null); 
  const [cartItem, setCartItem] = useState<any>(null);

  const pass_value = {user, setUser, cartItem, setCartItem}
  return (
    <UserContext.Provider value={pass_value}>
      {children}
    </UserContext.Provider>
  );
};
