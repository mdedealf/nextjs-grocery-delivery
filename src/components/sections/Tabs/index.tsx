"use client";
import { FC, useState } from "react";

const Tabs: FC = () => {
  const [choosedCategory, setChoosedCategory] = useState("All");

  const CATEGORIES = ["All", "Spicy", "Dressings", "Sweet", "Roots"];

  return (
    <nav className="flex gap-[30px] mb-[20px] mt-[20px] overflow-x-scroll w-full">
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

export default Tabs;
