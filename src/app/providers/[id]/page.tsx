import { prisma } from "@/db";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: { id: string };
}

const Page = async ({ params: { id } }: Props) => {
  const provider = await prisma.provider.findUnique({ where: { id } });
  const products = await prisma.product.findMany({ where: { providerId: id } });
  // const getu = await new Promise((res, rej) => setTimeout(() => res(""), 2000));

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-3 border p-5 rounded mb-5">
        <div className="relative h-[15rem] w-[10rem]">
          <Image fill alt="" src="/p2.jpg" className="rounded" />
        </div>
        <div className="flex flex-col justify-end gap-3 mb-3">
          <p className="">{provider?.name}</p>
          <Link
            href={"https://www.lendo.ir"}
            className="text-blue-500 italic underline"
          >
            {provider?.website}
          </Link>
        </div>
      </div>
      {/* info */}
      <div className="flex flex-col gap-3 border p-5 rounded mb-5">
        {/* <p>
          <span>انواع ضمانت:</span>
          <span>{provider?.specialContracts} </span>
        </p> */}
        <p>
          <span>سقف میزان اعتبار:</span>
          <span>{provider?.highestCredit}</span>
        </p>
        <p>
          <span>قرارداد های خاص:</span>
          <span>فرهنگیان بازنشستگان</span>
        </p>
        <p>
          <span>نوع اعتبار:</span>
          <span>نقد</span>
        </p>
      </div>
      {/* Refrences */}
      <div className="flex gap-5 flex-col md:flow-row justify-around">
        <div>
          <h2>سایت های طرف قرارداد</h2>
          <div>
            <p>www.azki.ir</p>
            <p>www.example.com</p>
          </div>
        </div>
        <div>
          <h2>محصولات:</h2>
          <div>
            {products.map(({id, name, price}, i) => (
              <div key={id} className="flex items-center justify-around gap-5 p-1 mb-2 border rounded">
                <p>{name}</p>
                <p>قیمت: {price}</p>
                <div className="relative w-[5rem] h-[7rem]">
                  <Image fill alt="" src={`/p${i+1}.jpg`} className="object-cover rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
