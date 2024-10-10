import Header from "@/components/sections/Header";
import ItemsLists from "@/components/sections/ItemsLists";
import Tabs from "@/components/sections/Tabs";
import { FC } from "react";

const HomePage: FC = () => {
  return (
    <main className="flex flex-col pt-[58px] px-[16px] h-screen w-full">
      <Header />
      <Tabs />
      <ItemsLists />
    </main>
  );
};

export default HomePage;
