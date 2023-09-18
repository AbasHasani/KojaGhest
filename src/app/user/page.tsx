import { Button } from "@/app/components/ui/button";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "@/db";
import UserHeader from "./header";
import Image from "next/image";
import { getUser } from "./session";

const loans = [
  {
    image: "/laptopP1.webp",
    name: "Lenovo x14",
    price: 14000000,
    value: 15000000,
    prepayment: 25,
    intrest: 15,
  },
  {
    image: "/laptopP2.webp",
    name: "Lenovo x15",
    price: 14000000,
    value: 15000000,
    prepayment: 25,
    intrest: 15,
  },
  {
    image: "/laptopP3.webp",
    name: "Lenovo x16",
    price: 14000000,
    value: 15000000,
    prepayment: 25,
    intrest: 15,
  },
  {
    image: "/laptopP4.webp",
    name: "Lenovo x17",
    price: 14000000,
    value: 15000000,
    prepayment: 25,
    intrest: 15,
  },
  {
    image: "/laptopP4.webp",
    name: "Lenovo x17",
    price: 14000000,
    value: 15000000,
    prepayment: 25,
    intrest: 15,
  },
];

const Page = async () => {
  return (
    <div>
      <div>
        <h1>وام ها</h1>
        <div className="grid grid-cols-fluid gap-3">
          {loans.map((loan) => (
            <div
              key={loan.name}
              className="flex flex-col min-h-[20rem] gap-2 justify-between border-info/50 my-3 rounded p-6 overflow-hidden shadow-2xl"
            >
              <div className="relative h-[10rem] w-full">
                <Image
                  src={loan.image}
                  className="object-cover rounded"
                  fill
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center">
                <p className="font-bold p-2 bg-slate-200 rounded my-1">
                  {loan.name}
                </p>
                <p>قیمت: {loan.price}</p>
                <p>سود: %{loan.intrest}</p>
                <p>مقدار وام: {loan.value}</p>
              </div>
              <Button className="bg-slate-300 text-black hover:text-white">وام دهنده</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
