import ProductCard from "@/components/ProductCard";
import { ALL_PRODUCTS_ROUTE } from "@/constant/apiRoutes";
import { Product } from "@/types/products";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";

const ProductLists: FC = () => {
  const fetchProducts = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}${ALL_PRODUCTS_ROUTE}`
    );
    if (response.ok) {
      const data = await response.json();
      return data as Product[];
    }
  };

  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const categoryProducts = products?.reduce((acc, product) => {
    if (!acc[product.category]) acc[product.category] = [];
    acc[product.category].push(product);
    return acc;
  }, {} as { [category: string]: Product[] });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <section className="flex flex-col gap-[20px] pb-[160px]">
      {categoryProducts &&
        Object.keys(categoryProducts).map((category) => (
          <div key={category} className="flex flex-col gap-[20px]">
            <span className="text-[24px] font-bold">{category}</span>
            <div className="grid grid-cols-2 gap-[10px] md:grid-cols-4 ">
              {categoryProducts[category]?.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        ))}
    </section>
  );
};

export default ProductLists;
