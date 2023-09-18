import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
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
}

const Product: FC<Props> = ({ id, name, image, description, prepayment, price }) => {
  return (
    <Link
      href={`/product/${id}`}
      className="flex flex-col min-h-[20rem] gap-2 justify-between border-info/50 my-3 rounded p-6 overflow-hidden shadow-2xl"
    >
      <div>
        <div className="flex flex-col gap-2">
          <div className="relative h-[10rem] w-full">
            <Image src={image || ""} className="rounded object-cover" fill alt="" />
          </div>
          <div className="">
            <p className="text-center">{name}</p>
            <p className="text-right my-2">{description}</p>
          </div>
        </div>
        <p className="text-center bg-primary/20 rounded ml-5 mt-5">
          {price}
        </p>
      </div>
      <div>
        <div className="flex items-center justify-center mt-4 gap-2">
          <div className="relative w-8 h-8">
            <Image src={"/p2.jpg"} className="rounded" fill alt="" />
          </div>
          <div className="text-sm">
            <p>پیش پرداخت:{prepayment}</p>
            <p>نوع ضمانت: چک سفته</p>
          </div>
        </div>
        <p className="mt-5 text-sm">
          تامین کننده اعتبار: خود فروشگاه/ بانک آینده
        </p>
      </div>
    </Link>
  );
};

export default Product;
