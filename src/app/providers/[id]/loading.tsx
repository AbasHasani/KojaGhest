import { Skeleton } from "@/app/components/ui/skeleton";
import { prisma } from "@/db";
import Image from "next/image";
import Link from "next/link";


const Loading = async () => {
  // const provider = await prisma.provider.findUnique({ where: { id } });
  // const products = await prisma.product.findMany({ where: { providerId: id } });
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-3 border p-5 rounded mb-5">
        <div className="relative h-[15rem] w-[10rem]">
          <Skeleton className="rounded w-full h-full bg-gray-600" />
        </div>
        <div className="flex flex-col justify-end gap-3 mb-3">
          <Skeleton className="w-[6rem] h-[2rem] bg-gray-600" />
          <Skeleton className="w-[4rem] h-2rem bg-gray-400" />
        </div>
      </div>
      {/* info */}
      <div className="flex flex-col gap-3 border p-5 rounded mb-5">
        <div className="flex">
          <Skeleton className="w-[6rem] h-[2rem] bg-gray-400 ml-2" />
          <Skeleton className="w-[6rem] h-[2rem] bg-gray-400 ml-2" />
          <Skeleton className="w-[6rem] h-[2rem] bg-gray-400" />
        </div>
        <div className="flex">
          <Skeleton className="w-[6rem] h-[2rem] bg-gray-400 ml-2" />
          <Skeleton className="w-[6rem] h-[2rem] bg-gray-400" />
        </div>
        <div className="flex">
          <Skeleton className="w-[6rem] h-[2rem] bg-gray-400 ml-2" />
          <Skeleton className="w-[6rem] h-[2rem] bg-gray-400" />
        </div>
        <div className="flex">
          <Skeleton className="w-[6rem] h-[2rem] bg-gray-400 ml-2" />
          <Skeleton className="w-[6rem] h-[2rem] bg-gray-400" />
        </div>
      </div>
      {/* Refrences */}
      <div className="flex justify-around">
        <div>
          <Skeleton className="w-[6rem] h-[2rem] bg-gray-400 mb-2" />
          <div className="flex">
            <Skeleton className="w-[6rem] h-[2rem] bg-gray-400 ml-2" />
            <Skeleton className="w-[6rem] h-[2rem] bg-gray-400" />
          </div>
        </div>
        <div>
          <Skeleton className="w-[6rem] h-[2rem] bg-gray-400 mb-2" />
          <div>
            {Array(3)
              .fill(null)
              .map((_, i) => (
                <Skeleton className="w-[14rem] h-[6rem] bg-gray-400 mb-2" key={i} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
