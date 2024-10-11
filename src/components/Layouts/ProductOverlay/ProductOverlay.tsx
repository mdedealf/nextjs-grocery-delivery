import Image from "next/image";
import { FC } from "react";
import MobileCart from "../MobileCart/MobileCart";

const ProductOverlay: FC = () => {
  return (
    <div className="absolute bottom-0 left-0 h-screen w-full z-10 bg-black/75">
      <div className="flex flex-col items-center mt-[40px] bg-white h-[calc(100vh-40px)] w-full opacity-100 rounded-t-[20px] p-[16px] z-20 gap-[16px]">
        <div className="flex w-[30px] items-center justify-center border-2" />
        <div className="flex items-center justify-center">
          <Image
            src="/products/cucumber.png"
            alt=""
            width={113}
            height={145}
            quality={100}
            priority
            className="h-[330px] w-full mix-blend-multiply object-contain"
          />
        </div>

        <div className="flex flex-col items-start w-full gap-[26px]">
          <span className="text-[31px] font-bold leading-[16px]">Garlic</span>
          <span className="text-[17px]">In 100 grams</span>
        </div>

        <div className="flex items-center justify-between w-full border-[1px] rounded-[15px] py-[19px] px-[30px]">
          <div className="flex flex-col items-center">
            <span className="text-[17px] font-bold">143</span>
            <span className="text-[14px] font-[400px] opacity-30">calorie</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[17px] font-bold">6.5</span>
            <span className="text-[14px] font-[400px] opacity-30">
              proteins
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[17px] font-bold">0.5</span>
            <span className="text-[14px] font-[400px] opacity-30">fats</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[17px] font-bold">29.9</span>
            <span className="text-[14px] font-[400px] opacity-30">carbs</span>
          </div>
        </div>

        <div className="flex items-center w-full justify-between gap-[12px]">
          <div className="flex items-center justify-between w-full bg-[#FAFAFA] rounded-full h-[54px] px-[8px]">
            <div className="flex items-center justify-center  rounded-full h-[40px] w-[40px] cursor-pointer bg-[#FAFAFA]">
              <Image
                src={"/icons/minus-reduce.svg"}
                alt="add icon"
                width={24}
                height={24}
              />
            </div>
            <span className="text-[16px] md:text-[20px] font-bold leading-[16px]">
              1.2 kg
            </span>
            <div className="flex items-center justify-center  rounded-full h-[40px] w-[40px] cursor-pointer bg-[#FAFAFA]">
              <Image
                src={"/icons/plus-add.svg"}
                alt="add icon"
                width={24}
                height={24}
              />
            </div>
          </div>
          <div className="flex items-center justify-center h-[54px] w-[54px] bg-[#FAFAFA] rounded-full">
            <div className="flex items-center justify-center  rounded-full h-[40px] w-[40px] cursor-pointer bg-[#FAFAFA]">
              <Image
                src={"/icons/minus-reduce.svg"}
                alt="add icon"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        <MobileCart isSticky={false} />
      </div>
    </div>
  );
};

export default ProductOverlay;
