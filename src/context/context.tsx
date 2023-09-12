"use client"

import { createContext, useState } from 'react';

interface UserContextType {
  user: any; 
}

export const UserContext = createContext(null);

export const UserProvider: any = ({ children }: any) => {
  const [user, setUser] = useState<any>(null); // Replace `any` with the actual type of `user` if possible

  const pass_value = {user, setUser}
  return (
    <UserContext.Provider value={pass_value}>
      {children}
    </UserContext.Provider>
  );
};
