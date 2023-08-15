"use client";
import { FC, useState } from "react";
import Options from "./options";
import Product from "./product";

interface Props {
  products: {
    name: string;
    description: string;
    price: number;
    prepayment: number;
    image: string;
    id: number;
  }[];
}

const Products: FC<Props> = ({ products }) => {
  const [sorting, setSorting] = useState("viewed");
  return (
    <div className="flex-1">
      <Options changeSorting={setSorting} />
      <div className="grid grid-cols-fluid gap-2 justify-items-center">
        {products
          .slice()
          .sort((a, b) =>
            sorting == "viewed"
              ? 0
              : sorting == "expensive"
              ? a.price - b.price
              : sorting == "cheapest"
              ? b.price - a.price
              : 0
          )
          .map((product) => (
            <Product {...product} key={product.id.toString()} />
          ))}
      </div>
    </div>
  );
};

export default Products;
