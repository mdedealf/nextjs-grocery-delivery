import Image from "next/image";
import { FC } from "react";

const DesktopCart: FC = () => {
  return (
    <div className="sticky top-0 flex flex-col gap-[8px] border-[1px] rounded-[12px] w-full h-[calc(100vh-286px)] p-[14px]">
      <Image
        src={"/icons/car-shipping.svg"}
        alt="add icon"
        width={80}
        height={34}
      />
      <span className="text-[18px]">
        Before free shipping <span className="font-bold">$1.67</span>
      </span>
    </div>
  );
};

export default DesktopCart;
