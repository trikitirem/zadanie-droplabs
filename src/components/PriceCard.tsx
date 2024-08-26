import React from "react";

type PriceCardProps = {
  price: number;
  currency?: string;
};

export const PriceCard: React.FC<PriceCardProps> = ({
  price,
  currency = "zł",
}) => {
  return (
    <span>
      {price}${currency}
    </span>
  );
};
