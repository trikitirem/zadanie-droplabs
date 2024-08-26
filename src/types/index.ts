export type ProductRating = {
  rate: number;
  count: number;
};

export type ProductBase = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export type Product = ProductBase & {
  description: string;
  category: string;
  rating: ProductRating;
};
