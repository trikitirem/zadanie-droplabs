import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Product } from "../../types";
import { LocalStorageKey, useLocalStorage } from "../../hooks";

export const ProductDetailsPage = () => {
  const {
    title,
    image,
    price,
    description,
    rating: { rate, count },
    id,
    category,
  } = useLoaderData() as Product;

  const { writeToLocalStorage } = useLocalStorage(
    LocalStorageKey.LATEST_VISITED,
  );
  useEffect(() => {
    writeToLocalStorage(id);
  }, []);

  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-3xl">{title}</h1>
      <div className="flex gap-4">
        <figure className="min-w-[400px] h-[300px] border">
          <img src={image} alt={title} className="object-contain h-full" />
        </figure>
        <article>
          <p className="text-2xl">{price}zł</p>
          <p>
            <span className="font-medium">Rating:</span> {rate}/5.0, out of{" "}
            {count} reviews
          </p>
          <p>
            <span className="font-medium">Category: </span>
            {category}
          </p>
          <p>
            <span className="font-medium">Description: </span>
            {description}
          </p>
        </article>
      </div>
    </section>
  );
};
