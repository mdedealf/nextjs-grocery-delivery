"use client";
import { FC, useState } from "react";

const NavBar: FC = () => {
  const [choosedCategory, setChoosedCategory] = useState("All");

  const CATEGORIES = ["All", "Spicy", "Dressings", "Sweet", "Roots"];

  return (
    <nav className="flex items-start gap-[30px] mb-[20px] mt-[20px] overflow-x-scroll min-h-[40px] w-full whitespace-nowrap overscroll-x-contain">
      {CATEGORIES.map((category, index) => (
        <div
          key={index}
          className={`${
            category === choosedCategory &&
            "border-b-2 border-black px-[10px] pb-[6px]"
          } `}
        >
          <span className="text-[18px] font-[400px] leading-[24px] text-black">
            {category}
          </span>
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
