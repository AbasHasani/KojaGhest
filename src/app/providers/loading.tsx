import { Skeleton } from "../components/ui/skeleton";

const Loading = async () => {
  // const products = await prisma.product.findMany();
  const options = [
    "پربازدیدترین",
    "ارزان ترین",
    "گران ترین",
    "پیشنهاد و خریداران",
  ];
  return (
    <div className="flex gap-2 items-start">
      <Skeleton className="bg-gray-500 h-[25rem] w-[10rem] ml-5" />
      <div className="flex-1">
        <div className="flex gap-3 mb-5 justify-around">
          {options.map((_, i) => (
            <Skeleton
              key={i}
              className="bg-gray-500 h-[2rem] w-[10rem] rounded"
            />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <Skeleton key={i} className="bg-gray-300 h-[15rem]" />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
