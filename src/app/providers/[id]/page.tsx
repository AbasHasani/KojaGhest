import { prisma } from "@/db";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: { id: string };
}

const Page = async ({ params: { id } }: Props) => {
  // const provider = await prisma.provider.findUnique({ where: { id } });
  // const products = await prisma.product.findMany({ where: { providerId: id } });
  const getu = await new Promise((res, rej) => setTimeout(() => res(""), 2000));

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-3 border p-5 rounded mb-5">
        <div className="relative h-[15rem] w-[10rem]">
          <Image fill alt="" src="/p2.jpg" className="rounded" />
        </div>
        <div className="flex flex-col justify-end gap-3 mb-3">
          <p className="">لندو</p>
          <Link
            href={"https://www.lendo.ir"}
            className="text-blue-500 italic underline"
          >
            سایت
          </Link>
        </div>
      </div>
      {/* info */}
      <div className="flex flex-col gap-3 border p-5 rounded mb-5">
        <p>
          <span>انواع ضمانت:</span>
          <span>چک </span>
          <span>سفته</span>
        </p>
        <p>
          <span>سقف میزان اعتبار:</span>
          <span>10000000</span>
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
      <div className="flex justify-around">
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
            {Array(3).fill(null).map((_,i) => (
              <div key={i} className="flex items-center gap-5 p-1 mb-2 border rounded">
                <p>محصول {i}</p>
                <p>قیمت: 12000000</p>
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
