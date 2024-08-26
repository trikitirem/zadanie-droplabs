import React from "react";
import { ProductRating } from "../types";

type RatingCardProps = {
  rating: ProductRating;
};

export const RatingCard: React.FC<RatingCardProps> = ({
  rating: { rate, count },
}) => {
  return (
    <p>
      Rating: {rate}/5.0, out of {count} reviews
    </p>
  );
};
