type Product = {
  price: number;
  weight: number;
  name: string;
  category: string;
  imageUrl: string;
  metadata: Metadata;
  id: string;
};

type Metadata = {
  unit: string;
  weight: number;
  calorie: number;
  proteins: number;
  fats: number;
  increment: number;
  carbs: number;
};

export { Product, Metadata };
