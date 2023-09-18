// "use client";
// import { Paper, SegmentedControl } from "@mantine/core";
import { prisma } from "@/db";
import Options from "./options";
import Product from "./product";
import Sidebar from "./sidebarOptions";
import Products from "./products";

// const products = [
//   {
//     name: "MacBook Air-MLXW3 M2 2022 LLA",
//     description: "لپ تاپ 13.6 اینچ اپل",
//     price: 52_980_000,
//     prepayment: 10,
//     image: "/laptopP1.webp",
//     id: 1,
//   },
//   {
//     name: "1لپتاپ",
//     description: "لپتاپ دانشجویی1",
//     price: 30,
//     prepayment: 20,
//     image: "/laptopP2.webp",
//     id: 2,
//   },
//   {
//     name: "2لپتاپ",
//     description: "لپتاپ دانشجویی2",
//     price: 40,
//     prepayment: 30,
//     image: "/laptopP3.webp",
//     id: 3,
//   },
//   {
//     name: "3لپتاپ",
//     description: "لپتاپ دانشجویی2",
//     price: 100,
//     prepayment: 32,
//     image: "/laptopP4.webp",
//     id: 4,
//   },
//   {
//     name: "4لپتاپ",
//     description: "لپتاپ دانشجویی2",
//     price: 40,
//     prepayment: 25,
//     image: "/laptopP5.webp",
//     id: 5,
//   },
//   {
//     name: "5لپتاپ",
//     description: "لپتاپ دانشجویی2",
//     price: 47,
//     prepayment: 13,
//     image: "/laptopP6.webp",
//     id: 6,
//   },
//   {
//     name: "6لپتاپ",
//     description: "لپتاپ دانشجویی2",
//     price: 10,
//     prepayment: 30,
//     image: "/laptopP7.webp",
//     id: 7,
//   },
// ];

const Page = async ({searchParams}:any) => {
  const products = await prisma.product.findMany();
  const getu = await new Promise((res, rej) => setTimeout(() => res(""), 2000));
  return (
    <div className="flex flex-col md:flex-row gap-2 items-start mt-5">
      <Sidebar />
      <Products products={products} />
    </div>
  );
};

export default Page;
