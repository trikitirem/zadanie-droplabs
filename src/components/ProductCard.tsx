import React from "react";
import { ProductBase } from "../types";
import { Link, generatePath } from "react-router-dom";
import { Routes } from "../router";

type ProductCardProps = {
  product: ProductBase;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product: { image, title, id, price },
}) => {
  return (
    <Link to={generatePath(Routes.PRODUCT_DETAILS, { id: id.toString() })}>
      <div className="h-full text-black p-4 rounded-md border hover:shadow-lg hover:underline">
        <figure className="h-[268px] w-full">
          <img
            src={image}
            alt={title}
            className="w-[268px] object-contain mx-auto"
          />
        </figure>
        <footer className="mt-4">
          <h1>{title}</h1>
          <p>{price}zł</p>
        </footer>
      </div>
    </Link>
  );
};
