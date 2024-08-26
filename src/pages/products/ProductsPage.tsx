import { useState } from "react";
import { ProductBase, SortBy } from "../../types";
import "./styles.css";
import { ProductCard, SortingControls } from "../../components";
import { useLoaderData } from "react-router-dom";

// NOTE: w związku z tym że nie muszę odpytywać api kilka razy o dane (sortowanie musi być zrobione lokalnie),
// używam funkcji z react-router-dom która pozwala na załadowanie danych przed wyrenderowaniem komponentu, co sprawia że kod jest bardziej przejrzysty.
// Alternatywną było by napisanie włansego hooka (stworzyłem uproszczony przykład, jest w pliku useFetch.ts), lub użycie biblioteki jak ReactQuery

const useGetProducts = (sortBy: SortBy) => {
  const products = useLoaderData() as ProductBase[];

  switch (sortBy) {
    case SortBy.PRICE:
      return products.slice().sort((a, b) => a.price - b.price); // Slice jest użyte po to żeby stworzyć nową tablicę i nie modyfikować starej
    case SortBy.TITLE:
      return products.slice().sort((a, b) => a.title.localeCompare(b.title));
    default: {
      return products;
    }
  }
};

export const ProductsPage = () => {
  const [sortBy, setSortBy] = useState(SortBy.DEFAULT);
  const products = useGetProducts(sortBy);

  return (
    <section>
      <header>
        <h1>Products</h1>
        <SortingControls
          sortBy={sortBy}
          setSortBy={(sortBy) => setSortBy(sortBy)}
        />
      </header>
      <ul className="products">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
};
