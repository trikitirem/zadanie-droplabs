import React from "react";
import { ProductBase } from "../../types";
import { Link, generatePath } from "react-router-dom";
import { Routes } from "../../router";
import "./styles.css";

type ProductCardProps = {
  product: ProductBase;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product: { image, title, id, price },
}) => {
  return (
    <Link
      to={generatePath(Routes.PRODUCT_DETAILS, { id: id.toString() })}
      className="product-card"
    >
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <span>{price}</span>
    </Link>
  );
};
