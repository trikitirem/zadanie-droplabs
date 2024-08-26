import "./styles.css";
import { useLoaderData } from "react-router-dom";
import { Product } from "../../types";
import { PriceCard, RatingCard } from "../../components";

export const ProductDetailsPage = () => {
  const { title, image, price, description, rating } =
    useLoaderData() as Product;

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
