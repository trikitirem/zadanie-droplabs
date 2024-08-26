import React from "react";
import { ProductBase } from "../types";
import { Link, generatePath } from "react-router-dom";
import { Routes } from "../router";
import "./styles.css";
import { PriceCard } from "./index.ts";

type ProductCardProps = {
  product: ProductBase;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product: { image, title, id, price },
}) => {
  return (
    <Link to={generatePath(Routes.PRODUCT_DETAILS, { id: id.toString() })}>
      <div className="product-card">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <footer>
          <h1>{title}</h1>
          <PriceCard price={price} />
        </footer>
      </div>
    </Link>
  );
};
