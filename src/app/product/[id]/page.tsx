import { prisma } from "@/db";
import Heading from "./heading";
import OnlineShops from "./onlineShops";

interface Props {
  params: {
    id: string;
  }
}

const Page = async ({params:{id}}:Props) => {
  const product = await prisma.product.findUnique({where: {id}});
  const loans = await prisma.loan.findMany({where: {productId: id}})
  return (
    <div>
      {/* @ts-ignore */}
      <Heading {...product} />
      <OnlineShops loans={loans} />
    </div>
  );
};

export default Page;
