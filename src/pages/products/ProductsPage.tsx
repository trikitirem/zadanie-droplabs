import type { ProductBase } from "../../types";
import "./styles.css";
import { ProductCard } from "../../components";
import { useLoaderData } from "react-router-dom";

export const ProductsPage = () => {
  // NOTE: w związku z tym że nie muszę odpytywać api kilka razy o dane (filtrowanie musi być zrobione lokalnie),
  // używam funkcji z react-router-dom która pozwala na załadowanie danych przed wyrenderowaniem komponentu, co sprawia że kod jest bardziej przejrzysty.
  // Alternatywną było by napisanie włansego hooka (stworzyłem uproszczony przykład, jest w pliku useFetch.ts), lub użycie biblioteki jak ReactQuery
  const products = useLoaderData() as ProductBase[];

  return (
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
  );
};
