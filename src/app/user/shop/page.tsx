"use client";
import { prisma } from "@/db";
import { ShopForm as Form } from "./form";
import Header from "./header";
import Product from "./product";
import { useState } from "react";

// const products = [
//   {
//     name: "MacBook Air-MLXW3 M2 2022 LLA",
//     description: "لپ تاپ 13.6 اینچ اپل",
//     price: 52_980_000,
//     prepayment: 10,
//     image: "/laptopP1.webp",
//     id: "1",
//     min: 1,
//     max: 20

//     // name: string,
//     // description: string;
//     // price: number;
//     // prepayment: number | null;
//     // image: string | null;
//     // min: number | null;
//     // max: number | null;
//     // id: "s"tring;
//     // createLoan: any;
//     // providerId: "a"ny
//   },
//   {
//     name: "1لپتاپ",
//     description: "لپتاپ دانشجویی1",
//     price: 30,
//     prepayment: 20,
//     image: "/laptopP2.webp",
//     id: "2",
//     min: 1,
//     max: 20
//   },
//   {
//     name: "2لپتاپ",
//     description: "لپتاپ دانشجویی2",
//     price: 40,
//     prepayment: 30,
//     image: "/laptopP3.webp",
//     id: "3",
//     min: 1,
//     max: 20
//   },
//   {
//     name: "3لپتاپ",
//     description: "لپتاپ دانشجویی2",
//     price: 100,
//     prepayment: 32,
//     image: "/laptopP4.webp",
//     id: "4",
//     min: 1,
//     max: 20
//   },
//   {
//     name: "4لپتاپ",
//     description: "لپتاپ دانشجویی2",
//     price: 40,
//     prepayment: 25,
//     image: "/laptopP5.webp",
//     id: "5",
//     min: 1,
//     max: 20
//   },
//   {
//     name: "5لپتاپ",
//     description: "لپتاپ دانشجویی2",
//     price: 47,
//     prepayment: 13,
//     image: "/laptopP6.webp",
//     id: "6",
//     min: 1,
//     max: 20
//   },
//   {
//     name: "6لپتاپ",
//     description: "لپتاپ دانشجویی2",
//     price: 10,
//     prepayment: 30,
//     image: "/laptopP7.webp",
//     id: "7",
//     min: 1,
//     max: 20
//   },
// ];

// const createProduct = async (
//   description: string,
//   name: string,
//   price: string,
//   min: string,
//   max: string,
//   prepayment: string,
//   providerId: string
// ) => {
//   "use server";
//   // await prisma.product.create({
//   //   data: {
//   //     description,
//   //     name,
//   //     price,
//   //     max,
//   //     min,
//   //     prepayment,
//   //     providerId,
//   //   },
//   // });
//   // console.log("Hi")
// };

// const createLoan = async (min: string, max: string, prepayment: string, percent: string, providerId: string , productId: string) => {
//   "use server";
//   // await prisma.loan.create({
//   //   data: {
//   //     max: Number(max),
//   //     min: Number(min),
//   //     percent: Number(percent),
//   //     prepayment: Number(prepayment),
//   //     providerId,
//   //     productId
//   //   }
//   // })
// }

const Page = () => {
  // const { id: userId, name } = await getUser();
  // const shop = await prisma.provider.findUnique({ where: { userId } });
  // const products = await prisma.product.findMany({
  //   where: { providerId: shop?.id },
  // });
  const [products, setProducts] = useState<
    {
      description: string;
      name: string;
      price: string;
      min: number;
      max: number;
      prepayment: number;
      providerId: string;
      loans: number;
      id: string;
      percent: number;
      image: "";
    }[]
  >([]);
  const [loans, setLoans] = useState<
    {
      description: string;
      name: string;
      price: string;
      min: number;
      max: number;
      prepayment: number;
      providerId: string;
      productId: string;
      id: string;
      percent: number;
      image: "";
    }[]
  >([]);

  const createProduct = (
    description: string,
    name: string,
    price: string,
    providerId: string
  ) => {
    setProducts([
      ...products,
      {
        description,
        name,
        price,
        min: 0,
        max: 0,
        prepayment: 0,
        percent: 0,
        providerId,
        id: Math.random().toString(15),
        image: "",
        loans: 0,
      },
    ]);
  };

  const createLoan = (
    min: number,
    max: number,
    prepayment: number,
    percent: number,
    providerId: string,
    productId: string
  ) => {
    const product = products.filter((prod) => prod.id == productId)[0];
    setLoans([
      ...loans,
      {
        min,
        max,
        name: product.name,
        image: "",
        percent,
        prepayment,
        providerId,
        productId,
        description: product.description,
        price: product.price,
        id: Math.random().toString(15),
      },
    ]);
    setProducts((prev) =>
      prev.map((prod) => {
        if (prod.id === productId) {
          return {
            ...prod,
            loans: prod.loans + 1,
            min: !prod.min ? min : prod.min > min ? min : prod.min,
            max: !prod.max ? max: prod.max >max ? prod.max : max,
            percent: !prod.percent ? percent : prod.percent > percent ? percent : prod.percent,
            prepayment: !prod.prepayment ? prepayment : prod.prepayment > prepayment ? prepayment : prod.prepayment
          };
        } else {
          return prod;
        }
      })
    );
  };
  return (
    <div>
      {/* <Header /> */}
      <h1 className="m-5">محصولات فروشگاه:</h1>
      <div className="max-w-[40rem] mx-auto">
        <Form createProduct={createProduct} providerId={"15"} />
      </div>
      <div className="mt-5">
        {products.map((product) => (
          <Product
            key={product.id}
            {...product}
            createLoan={createLoan}
            providerId={"45"}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
