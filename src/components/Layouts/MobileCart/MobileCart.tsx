import { FC } from "react";

interface MobileCartProps {
  isSticky: boolean;
}

const MobileCart: FC<MobileCartProps> = ({ isSticky }) => {
  return (
    <div
      className={`${
        isSticky ? "sticky bottom-[58px]" : ""
      }  bg-black w-full text-white px-[25px] py-[13px] rounded-[40px] flex items-center justify-between h-[55px] z-20`}
    >
      <div>Cart</div>
      <div>
        <span>$27</span>
      </div>
    </div>
  );
};

export default MobileCart;
