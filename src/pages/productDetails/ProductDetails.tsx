import "./styles.css";
import { useLoaderData } from "react-router-dom";
import { Product } from "../../types";
import { PriceCard, RatingCard } from "../../components";
import { LocalStorageKey, useLocalStorage } from "../../hooks";
import { useEffect } from "react";

export const ProductDetailsPage = () => {
  const { title, image, price, description, rating, id } =
    useLoaderData() as Product;

  const { writeToLocalStorage } = useLocalStorage(
    LocalStorageKey.LATEST_VISITED,
  );
  useEffect(() => {
    writeToLocalStorage(id);
  }, []);

  return (
    <section className="product-details-container">
      <h1>{title}</h1>
      <figure>
        <img src={image} alt={title} />
      </figure>
      <article>
        <PriceCard price={price} />
        <RatingCard rating={rating} />
        <p>
          <span>Description: </span>
          {description}
        </p>
      </article>
    </section>
  );
};
