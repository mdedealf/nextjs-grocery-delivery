import Image from "next/image";
import { FC } from "react";

const ItemsLists: FC = () => {
  const DUMMY_PRODUCTS = [
    {
      price: 0.0032,
      weight: 1000,
      name: "Beetles",
      category: "Exotic",
      imageUrl: "/products/beetles.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 190,
        proteins: 24,
        fats: 9,
        increment: 100,
        carbs: 2,
      },
      id: "0",
    },
    {
      price: 0.0033,
      weight: 1300,
      name: "Cucumber",
      category: "Fresh Veggie",
      imageUrl: "/products/cucumber.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 16,
        proteins: 0.7,
        fats: 0.1,
        increment: 100,
        carbs: 3.6,
      },
      id: "1",
    },
    {
      price: 0.0027,
      weight: 1200,
      name: "White Onion",
      category: "Fresh Veggie",
      imageUrl: "/products/white-onion.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 40,
        proteins: 1.1,
        fats: 0.1,
        increment: 100,
        carbs: 9.3,
      },
      id: "2",
    },
    {
      price: 0.004,
      weight: 1500,
      name: "Lemon",
      category: "Fresh Veggie",
      imageUrl: "/products/lemon.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 29,
        proteins: 1.1,
        fats: 0.3,
        increment: 100,
        carbs: 9.3,
      },
      id: "3",
    },
    {
      price: 0.0028,
      weight: 2000,
      name: "Potato",
      category: "Roots",
      imageUrl: "/products/potato.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 77,
        proteins: 2,
        fats: 0.1,
        increment: 100,
        carbs: 17,
      },
      id: "4",
    },
    {
      price: 0.0032,
      weight: 1000,
      name: "Fresh Garlic",
      category: "Spicy",
      imageUrl: "/products/garlic.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 143,
        proteins: 6.5,
        fats: 0.5,
        increment: 100,
        carbs: 29.9,
      },
      id: "5",
    },
    {
      price: 0.0045,
      weight: 500,
      name: "Red Chili Pepper",
      category: "Spicy",
      imageUrl: "/products/potato.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 40,
        proteins: 2,
        fats: 0.4,
        increment: 100,
        carbs: 9,
      },
      id: "6",
    },
    {
      price: 0.005,
      weight: 750,
      name: "Ranch Dressing",
      category: "Dressings",
      imageUrl: "/products/cucumber.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 145,
        proteins: 1,
        fats: 15,
        increment: 100,
        carbs: 2,
      },
      id: "7",
    },
    {
      price: 0.006,
      weight: 1000,
      name: "Honey",
      category: "Sweet",
      imageUrl: "/products/lemon.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 304,
        proteins: 0.3,
        fats: 0,
        increment: 100,
        carbs: 82.4,
      },
      id: "8",
    },
    {
      price: 0.0025,
      weight: 2000,
      name: "Carrot",
      category: "Roots",
      imageUrl: "/products/tomato.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 41,
        proteins: 0.9,
        fats: 0.2,
        increment: 100,
        carbs: 9.6,
      },
      id: "9",
    },
    {
      price: 0.0038,
      weight: 1500,
      name: "Beetroot",
      category: "Roots",
      imageUrl: "/products/beetles.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 43,
        proteins: 1.6,
        fats: 0.2,
        increment: 100,
        carbs: 10,
      },
      id: "10",
    },
    {
      price: 0.007,
      weight: 1200,
      name: "Maple Syrup",
      category: "Sweet",
      imageUrl: "/products/potato.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 260,
        proteins: 0,
        fats: 0,
        increment: 100,
        carbs: 67,
      },
      id: "11",
    },
    {
      price: 0.0085,
      weight: 1000,
      name: "Olive Oil Dressing",
      category: "Dressings",
      imageUrl: "/products/potato.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 884,
        proteins: 0,
        fats: 100,
        increment: 100,
        carbs: 0,
      },
      id: "12",
    },
    {
      price: 0.0028,
      weight: 1000,
      name: "Ginger",
      category: "Spicy",
      imageUrl: "/products/lemon.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 80,
        proteins: 1.8,
        fats: 0.8,
        increment: 100,
        carbs: 18,
      },
      id: "13",
    },
    {
      price: 0.004,
      weight: 500,
      name: "Balsamic Vinegar",
      category: "Dressings",
      imageUrl: "/products/tomato.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 88,
        proteins: 0.5,
        fats: 0,
        increment: 100,
        carbs: 17,
      },
      id: "14",
    },
    {
      price: 0.0055,
      weight: 1500,
      name: "Sweet Corn",
      category: "Sweet",
      imageUrl: "/products/lemon.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 86,
        proteins: 3.2,
        fats: 1.2,
        increment: 100,
        carbs: 19,
      },
      id: "15",
    },
    {
      price: 0.0048,
      weight: 1000,
      name: "Radish",
      category: "Roots",
      imageUrl: "/products/white-onion.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 16,
        proteins: 0.7,
        fats: 0.1,
        increment: 100,
        carbs: 3.4,
      },
      id: "16",
    },
    {
      price: 0.0065,
      weight: 800,
      name: "BBQ Sauce",
      category: "Dressings",
      imageUrl: "/products/tomato.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 165,
        proteins: 1,
        fats: 0.4,
        increment: 100,
        carbs: 40,
      },
      id: "17",
    },
    {
      price: 0.0035,
      weight: 700,
      name: "Sweet Potato",
      category: "Roots",
      imageUrl: "/products/potato.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 86,
        proteins: 1.6,
        fats: 0.1,
        increment: 100,
        carbs: 20.1,
      },
      id: "18",
    },
    {
      price: 0.0022,
      weight: 600,
      name: "Green Chili",
      category: "Spicy",
      imageUrl: "/products/cucumber.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 40,
        proteins: 1.9,
        fats: 0.2,
        increment: 100,
        carbs: 8.8,
      },
      id: "19",
    },
    {
      price: 0.0075,
      weight: 750,
      name: "Agave Syrup",
      category: "Sweet",
      imageUrl: "/products/potato.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 310,
        proteins: 0,
        fats: 0,
        increment: 100,
        carbs: 76,
      },
      id: "20",
    },
    {
      price: 0.0042,
      weight: 850,
      name: "Hot Sauce",
      category: "Spicy",
      imageUrl: "/products/tomato.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 12,
        proteins: 0.5,
        fats: 0.1,
        increment: 100,
        carbs: 2.4,
      },
      id: "21",
    },
    {
      price: 0.0058,
      weight: 950,
      name: "Tahini",
      category: "Dressings",
      imageUrl: "/products/tomato.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 595,
        proteins: 17,
        fats: 53,
        increment: 100,
        carbs: 21,
      },
      id: "22",
    },
    {
      price: 0.003,
      weight: 1000,
      name: "Yam",
      category: "Roots",
      imageUrl: "/products/lemon.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 118,
        proteins: 1.5,
        fats: 0.1,
        increment: 100,
        carbs: 27.9,
      },
      id: "23",
    },
    {
      price: 0.0026,
      weight: 1200,
      name: "Tomato",
      category: "Fresh Veggie",
      imageUrl: "/products/beetles.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 18,
        proteins: 0.9,
        fats: 0.2,
        increment: 100,
        carbs: 3.9,
      },
      id: "24",
    },
    {
      price: 0.0033,
      weight: 1300,
      name: "Cucumber",
      category: "Fresh Veggie",
      imageUrl: "/products/cucumber.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 16,
        proteins: 0.7,
        fats: 0.1,
        increment: 100,
        carbs: 3.6,
      },
      id: "25",
    },
    {
      price: 0.0029,
      weight: 1500,
      name: "Lettuce",
      category: "Fresh Veggie",
      imageUrl: "/products/cucumber.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 15,
        proteins: 1.4,
        fats: 0.2,
        increment: 100,
        carbs: 2.9,
      },
      id: "26",
    },
    {
      price: 0.0041,
      weight: 1000,
      name: "Bell Pepper",
      category: "Fresh Veggie",
      imageUrl: "/products/garlic.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 31,
        proteins: 1,
        fats: 0.3,
        increment: 100,
        carbs: 6,
      },
      id: "27",
    },
    {
      price: 0.0037,
      weight: 800,
      name: "Zucchini",
      category: "Fresh Veggie",
      imageUrl: "/products/garlic.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 17,
        proteins: 1.2,
        fats: 0.3,
        increment: 100,
        carbs: 3.1,
      },
      id: "28",
    },
    {
      price: 0.0034,
      weight: 1100,
      name: "Spinach",
      category: "Fresh Veggie",
      imageUrl: "/products/beetles.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 23,
        proteins: 2.9,
        fats: 0.4,
        increment: 100,
        carbs: 3.6,
      },
      id: "29",
    },
    {
      price: 0.003,
      weight: 900,
      name: "Broccoli",
      category: "Fresh Veggie",
      imageUrl: "/products/cucumber.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 34,
        proteins: 2.8,
        fats: 0.4,
        increment: 100,
        carbs: 6.6,
      },
      id: "30",
    },
    {
      price: 0.004,
      weight: 700,
      name: "Kale",
      category: "Fresh Veggie",
      imageUrl: "/products/cucumber.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 49,
        proteins: 4.3,
        fats: 0.9,
        increment: 100,
        carbs: 8.8,
      },
      id: "31",
    },
    {
      price: 0.0055,
      weight: 800,
      name: "Asparagus",
      category: "Fresh Veggie",
      imageUrl: "/products/cucumber.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 20,
        proteins: 2.2,
        fats: 0.1,
        increment: 100,
        carbs: 3.9,
      },
      id: "32",
    },
    {
      price: 0.0036,
      weight: 1400,
      name: "Green Beans",
      category: "Fresh Veggie",
      imageUrl: "/products/tomato.png",
      metadata: {
        unit: "g",
        weight: 100,
        calorie: 31,
        proteins: 1.8,
        fats: 0.1,
        increment: 100,
        carbs: 7.1,
      },
      id: "33",
    },
  ];

  const isClicked = false;

  return (
    <section className="grid grid-cols-2 gap-[10px]">
      {DUMMY_PRODUCTS.map((product, index) => (
        <div
          key={index}
          className="flex flex-col justify-center gap-[12px] bg-[#F9F8F6] rounded-[12px] p-[12px] w-full"
        >
          <div>
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={150}
              height={150}
              className="h-auto w-full aspect-square mix-blend-multiply object-cover"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-[2px] mb-[27px]">
            <span className="text-[22px] font-bold leading-[32px]">
              ${product.price}
            </span>
            <span className="text-[16px] font-[400px] leading-[16px]">
              {product.name}
            </span>
          </div>
          <div className="flex items-center justify-between w-full">
            {isClicked ? (
              <div className="flex justify-between w-full">
                <div>-</div>
                <span>1.2 kg</span>
                <div>+</div>
              </div>
            ) : (
              <div className="flex items-center justify-between w-full">
                <span className="text-[16px] font-[400px] leading-[16px] opacity-[30%]">
                  {product.weight} {product.metadata.unit}
                </span>
                <div className="flex items-center justify-center border-[1px] rounded-full h-[40px] w-[40px] cursor-pointer hover:bg-slate-100">
                  <Image
                    src={"/icons/plus-add.svg"}
                    alt={product.name}
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ItemsLists;
