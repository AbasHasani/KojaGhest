import { prisma } from "@/db";
import Heading from "./heading";
import OnlineShops from "./onlineShops";

interface Props {
  params: {
    id: string;
  }
}

const Page = async ({params:{id}}:Props) => {
  // const product = await prisma.product.findUnique({where: {id}});
  // const loans = await prisma.loan.findMany({where: {productId: id}})
  const product = {name: "Laptop", description: "لپتاپ گیمینگ", providerId: 1506, price: 12000000}
  const loans = [{id:1,providerId:5,percent:15},{id:1,providerId:5,percent:15}]
  return (
    <div>
      {/* @ts-ignore */}
      <Heading {...product} />
      <OnlineShops loans={loans} />
    </div>
  );
};

export default Page;
