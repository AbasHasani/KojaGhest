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
    <div className="flex flex-col md:flex-row gap-2 items-start">
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
        <div className="grid grid-cols-fluid gap-2">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <Skeleton key={i} className="bg-gray-500 w-[15rem] h-[20rem]" />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
