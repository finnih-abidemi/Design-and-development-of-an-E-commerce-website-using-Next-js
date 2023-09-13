"use client"
import { SessionProvider } from "next-auth/react";
import { UserProvider } from "@/context/context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
      <>
      <UserProvider>
        <SessionProvider>
          {children}
        </SessionProvider>
      </UserProvider>
      </>
  );
}
