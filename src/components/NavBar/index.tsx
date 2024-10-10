"use client";
import { FC, useState } from "react";

const NavBar: FC = () => {
  const [choosedCategory, setChoosedCategory] = useState("All");

  const CATEGORIES = [
    "All",
    "Spicy",
    "Dressings",
    "Sweet",
    "Roots",
    "White Onion",
    "Fresh Veggie",
    "Fresh Garlic",
    "Red Chili Pepper",
    "Ranch Dressing",
  ];

  return (
    <nav className="flex items-start gap-[32px] mb-[20px] mt-[26px] overflow-x-scroll min-h-[40px] md:min-h-[50px] w-full whitespace-nowrap">
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
