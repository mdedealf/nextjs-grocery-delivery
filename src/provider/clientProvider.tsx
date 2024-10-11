"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, ReactNode } from "react";

interface ClientProviderProps {
  children: ReactNode;
}

const ClientProvider: FC<ClientProviderProps> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default ClientProvider;
