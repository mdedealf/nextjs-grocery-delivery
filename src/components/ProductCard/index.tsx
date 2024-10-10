import { Product } from "@/types/products";
import Image from "next/image";
import { FC } from "react";
import ActionButton from "../ActionButton";

const ProductCard: FC<Product> = ({
  imageUrl,
  metadata,
  name,
  price,
  weight,
}) => {
  return (
    <div className="flex flex-col justify-center gap-[12px] bg-[#F9F8F6] rounded-[12px] p-[12px] md:p-[24px] w-full">
      <div>
        <Image
          src={imageUrl}
          alt={name}
          width={113}
          height={145}
          quality={100}
          priority
          className="h-full w-full aspect-square mix-blend-multiply object-contain"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-[2px] mb-[20px] md:mb-[28px]">
        <span className="text-[22px] md:text-[28px] font-bold leading-[32px]">
          ${price}
        </span>
        <span className="text-[16px] md:text-[20px] font-[400px] leading-[16px]">
          {name}
        </span>
      </div>
      <div className="flex items-center justify-between w-full">
        {false ? (
          <ActionButton />
        ) : (
          <div className="flex items-center justify-between w-full">
            <span className="text-[16px] md:text-[20px] font-[400px] leading-[16px] opacity-[30%]">
              {weight} {metadata?.unit || 0}
            </span>
            <div className="flex items-center justify-center border-[1px] rounded-full h-[44px] md:h-[58px] w-[44px] md:w-[58px] cursor-pointer hover:bg-slate-100">
              <Image
                src={"/icons/plus-add.svg"}
                alt="add icon"
                width={24}
                height={24}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
