"use client";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import { FC, useState } from "react";
import { ProductForm } from "./productForm";
import { truncateString } from "../../../lib/utils";

interface Props {
  name: string;
  description: string;
  min: number | null;
  max: number | null;
  price: number;
  id: string;
  prepayment: number | null;
  image: string | null;
  createLoan: any;
  providerId: any
}

const Product: FC<Props> = ({
  name,
  description,
  min,
  max,
  price,
  image,
  id,
  prepayment,
  createLoan,
  providerId
}) => {
  const [openAddPanel, setOpenAddPanel] = useState(false);
  return (
    <div className="bg-emerald-500/30 rounded overflow-hidden mb-2">
      <div className="grid grid-cols-3">
        <div className="flex gap-3 items-center bg-red-6000 p-1 text-black">
          <div className="relative h-[8rem] w-[6rem] rounded overflow-hidden">
            <Image
              src={image || "/p4.jpg"}
              fill
              alt=""
              className="object-cover"
            />
          </div>
          <div>
            <p>{truncateString(name, 15)}</p>
            <p>{truncateString(description, 15)}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 p-2 text-cyan-100">
          <p className="text-center p-2 rounded bg-accent">حداقل: {min}</p>
          <p className="text-center p-2 rounded bg-accent">حداکثر: {max}</p>
          <p className="text-center p-2 rounded bg-accent">قیمت: {price}</p>
          <p className="text-center p-2 rounded bg-accent">
            پیش پرداخت: {prepayment}
          </p>
        </div>
        <div className="p-5 grid place-items-center">
          <Button onClick={() => setOpenAddPanel((prev) => !prev)} className="bg-cyan-400">اضافه کردن وام</Button>
        </div>
      </div>
      {openAddPanel ? <ProductForm createLoan={createLoan} providerId={providerId} productId={id} /> : null}
    </div>
  );
};

export default Product;
