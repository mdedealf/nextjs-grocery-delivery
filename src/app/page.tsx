import { FC } from "react";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import ProductLists from "./pages/ProductLists/ProductLists";

const HomePage: FC = () => {
  return (
    <main className="flex flex-col pt-[58px] px-[16px] md:px-[56px] h-screen w-screen">
      <Header />
      <NavBar />
      <ProductLists />
    </main>
  );
};

export default HomePage;
