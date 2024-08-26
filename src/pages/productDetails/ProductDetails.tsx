import React from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../../types";
import { PriceCard, RatingCard } from "../../components";

type ProductDetailsLayoutProps = {
  id: number;
};

const fetchProduct = async (id: number) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  return await response.json();
};

export const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  return id ? <ProductDetailsLayout id={+id} /> : null;
};

const ProductDetailsLayout: React.FC<ProductDetailsLayoutProps> = ({ id }) => {
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery<Product>({
    queryFn: () => fetchProduct(id),
    queryKey: ["products", id],
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error!</div>;
  if (!product) return null;

  const { title, image, price, description, rating } = product;
  return (
    <div>
      <h1>{title}</h1>
      <section>
        <figure>
          <img src={image} alt={title} />
        </figure>
        <main>
          <header>
            <PriceCard price={price} />
            <RatingCard rating={rating} />
          </header>
          <article>
            <p>Description:</p>
            {description}
          </article>
        </main>
      </section>
    </div>
  );
};
