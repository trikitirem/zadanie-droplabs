import { useQuery, QueryKey } from "@tanstack/react-query";

const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return await response.json();
};

export const ProductsPage = () => {
  const { data } = useQuery({
    queryFn: fetchProducts,
    queryKey: ["products"],
  });

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};
