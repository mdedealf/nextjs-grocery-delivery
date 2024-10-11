"use client";
import { FC, useState } from "react";

const NavBar: FC = () => {
  const [choosedCategory, setChoosedCategory] = useState("All");

  const CATEGORIES = [
    "All",
    "Exotic",
    "Fresh Veggie",
    "Spicy",
    "Dressings",
    "Sweet",
    "Roots",
    "White Onion",
    "Fresh Garlic",
    "Red Chili Pepper",
    "Ranch Dressing",
  ];

  return (
    <nav className="flex items-start gap-[26px] md:gap-[36px] mb-[20px] mt-[26px] md:mt-[46px] min-h-[40px] md:min-h-[52px] w-screen px-[16px] mx-[-16px] overflow-x-scroll  whitespace-nowrap">
      {CATEGORIES.map((category, index) => (
        <div
          key={index}
          className={`${
            category === choosedCategory &&
            "border-b-2 border-black px-[10px] pb-[6px]"
          } `}
        >
          <span className="text-[18px] md:text-[20px] font-[400px] leading-[24px] text-black cursor-pointer">
            {category}
          </span>
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
