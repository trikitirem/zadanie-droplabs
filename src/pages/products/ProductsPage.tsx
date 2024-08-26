import { useQuery } from "@tanstack/react-query";
import type { ProductBase } from "../../types";
import "./styles.css";
import { ProductCard } from "../../components";

const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return await response.json();
};

export const ProductsPage = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery<ProductBase[]>({
    queryFn: fetchProducts,
    queryKey: ["products"],
  });

  if (isLoading) return <div>isLoading</div>;
  if (isError) return <div>Error!</div>;

  return (
    <main>
      <section>
        <h1>Products</h1>
        <ul className="products">
          {products?.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};
