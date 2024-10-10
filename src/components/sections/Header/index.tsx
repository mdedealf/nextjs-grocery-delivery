import Image from "next/image";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="flex justify-between">
      <span className="text-[20px] font-bold leading-[24px]">Vegetables</span>
      <div className="flex items-center justify-center gap-[16px]">
        <Image
          src={"/icons/filter.svg"}
          alt="Filter icon"
          width={24}
          height={24}
        />
        <Image
          src={"/icons/search.svg"}
          alt="Search icon"
          width={24}
          height={24}
        />
      </div>
    </header>
  );
};

export default Header;
