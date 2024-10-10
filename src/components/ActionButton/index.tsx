import Image from "next/image";
import { FC } from "react";

const ActionButton: FC = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center justify-center border-[1px] rounded-full h-[40px] md:h-[58px] w-[40px] md:w-[58px] cursor-pointer bg-black">
        <Image
          src={"/icons/minus-reduce-white.svg"}
          alt="add icon"
          width={24}
          height={24}
        />
      </div>
      <span className="text-[16px] md:text-[20px] font-[400px] leading-[16px]">
        1.2 kg
      </span>
      <div className="flex items-center justify-center border-[1px] rounded-full h-[40px] md:h-[58px] w-[40px] md:w-[58px] cursor-pointer bg-black">
        <Image
          src={"/icons/plus-add-white.svg"}
          alt="add icon"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default ActionButton;
