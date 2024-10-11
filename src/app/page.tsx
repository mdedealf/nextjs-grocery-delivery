"use client";
import { FC } from "react";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import ProductLists from "../components/Layouts/ProductLists/ProductLists";
import DesktopCart from "@/components/Layouts/DesktopCart/DesktopCart";
import MobileCart from "@/components/Layouts/MobileCart/MobileCart";
import ProductOverlay from "@/components/Layouts/ProductOverlay/ProductOverlay";

const HomePage: FC = () => {
  return (
    <main className="relative flex flex-col md:flex-row pt-[58px] px-[16px] md:px-[56px] h-screen w-full">
      <section className="md:basis-[80%] md:overflow-y-auto md:pr-[16px] md:overflow-x-hidden">
        <Header />
        <NavBar />
        <ProductLists />
        {/* <ProductOverlay /> */}
        {/* <MobileCart isSticky={true} /> */}
      </section>
      <section className="md:basis-[20%] hidden md:block pl-[16px] pt-[184px] w-full">
        <DesktopCart />
      </section>
    </main>
  );
};

export default HomePage;
