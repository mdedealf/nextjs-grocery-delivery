"use client";
import { FC } from "react";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import ProductLists from "../components/Layouts/ProductLists/ProductLists";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const HomePage: FC = () => {
  const queryClient = new QueryClient({});

  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex flex-col pt-[58px] px-[16px] md:px-[56px] h-screen w-full">
        <Header />
        <NavBar />
        <ProductLists />
      </main>
    </QueryClientProvider>
  );
};

export default HomePage;
