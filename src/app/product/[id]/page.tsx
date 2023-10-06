import { prisma } from "@/db";
import Heading from "./heading";
import OnlineShops from "./onlineShops";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

interface Props {
  params: {
    id: string;
  };
}

const takeLoan = async (
  amount: any,
  percent: any,
  prepayment: any,
  time: any,
  productId: any,
  providerId: any,
  takerId: any
) => {
  "use server";
  await prisma.takenLoan.create({
    data: {
      amount,
      percent,
      prepayment,
      time,
      productId,
      providerId,
      takerId,
    },
  });
};

const Page = async ({ params: { id } }: Props) => {
  const product = await prisma.product.findUnique({ where: { id } });
  const loans = await prisma.loan.findMany({ where: { productId: id } });
  const session  = await getServerSession(authOptions);
  // const product = {name: "Laptop", description: "لپتاپ گیمینگ", providerId: 1506, price: 12000000}
  // const loans = [{id:1,providerId:5,percent:15},{id:1,providerId:5,percent:15}]
  return (
    <div>
      {/* @ts-ignore */}
      <Heading {...product} takeLoan={takeLoan} />
      <OnlineShops loans={loans} takeLoan={takeLoan} session={session} />
    </div>
  );
};

export default Page;
