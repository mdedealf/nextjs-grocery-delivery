import { Product } from "@/types/products";
import Image from "next/image";
import { FC } from "react";

const ProductCard: FC<Product> = ({
  category,
  id,
  imageUrl,
  metadata,
  name,
  price,
  weight,
}) => {
  return (
    <div className="flex flex-col justify-center gap-[12px] bg-[#F9F8F6] rounded-[12px] p-[12px] w-full">
      <div>
        <Image
          src={imageUrl}
          alt={name}
          width={113}
          height={145}
          quality={100}
          unoptimized
          sizes="(min-width: 768px) 50vw, 100vw"
          className="h-full w-full aspect-square mix-blend-multiply object-contain"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-[2px] mb-[18px]">
        <span className="text-[22px] md:text-[28px] font-bold leading-[32px]">
          ${price}
        </span>
        <span className="text-[16px] md:text-[20px] font-[400px] leading-[16px]">
          {name}
        </span>
      </div>
      <div className="flex items-center justify-between w-full">
        {false ? (
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-center border-[1px] rounded-full h-[44px] w-[44px] cursor-pointer bg-black">
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
            <div className="flex items-center justify-center border-[1px] rounded-full h-[44px] w-[44px] cursor-pointer bg-black">
              <Image
                src={"/icons/plus-add-white.svg"}
                alt="add icon"
                width={24}
                height={24}
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between w-full">
            <span className="text-[16px] md:text-[20px] font-[400px] leading-[16px] opacity-[30%]">
              {weight} {metadata?.unit || 0}
            </span>
            <div className="flex items-center justify-center border-[1px] rounded-full h-[44px] w-[44px] cursor-pointer hover:bg-slate-100">
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
