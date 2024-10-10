"use client";
import { FC } from "react";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import ProductLists from "../components/Layouts/ProductLists/ProductLists";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Image from "next/image";

const HomePage: FC = () => {
  const queryClient = new QueryClient({});

  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex flex-col md:flex-row pt-[58px] px-[16px] md:px-[56px] h-screen w-full">
        <section className="md:basis-[75%] md:overflow-y-auto md:pr-[16px]">
          <Header />
          <NavBar />
          <ProductLists />
        </section>
        <section className="md:basis-[25%] hidden md:block pl-[16px] pt-[184px] w-full">
          <div className="sticky top-0 flex flex-col gap-[8px] border-[1px] rounded-[12px] w-full h-[calc(100vh-286px)] p-[14px]">
            <Image
              src={"/icons/car-shipping.svg"}
              alt="add icon"
              width={80}
              height={34}
            />
            <span className="text-[18px]">
              Before free shipping <span className="font-bold">$1.67</span>
            </span>
          </div>
        </section>
      </main>
    </QueryClientProvider>
  );
};

export default HomePage;
