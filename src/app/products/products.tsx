"use client";
import { FC, useState } from "react";
import Options from "./options";
import Product from "./product";

interface Props {
  products: {
    id: string;
    name: string;
    description: string;
    image: string | null;
    loans: number | null;
    prepayment: number | null;
    amount: number;
    createdAt: Date;
    updatedAt: Date;
    price: number;
    providerId: string;
  }[];
}

const Products: FC<Props> = ({ products }) => {
  const [sorting, setSorting] = useState("viewed");
  return (
    <div className="flex-1 w-full">
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
