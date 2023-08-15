import { Skeleton } from "../components/ui/skeleton";
import Article from "./article";

const Loading = () => {
  return (
    <div>
      <Skeleton className="text-center border-b border-info w-[6rem] h-[3rem]" />
      <div>
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <div
              className="flex gap-2 justify-between items-center border-info/50 my-3 rounded shadow p-6"
              key={i}
            >
              <div>
                <div className="flex items-center gap-2">
                  <div>
                    <Skeleton className="bg-gray-600 w-[6rem] h-[1rem]" />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <div className="text-left">
                    <Skeleton className="bg-gray-600 w-[3rem] h-[1rem]" />
                  </div>
                  <Skeleton className="bg-gray-600 rounded w-[80px] h-[80px]" />
                </div>
                <Skeleton className="bg-gray-600 text-left ml-5 mt-5 w-[6rem] h-[1rem]" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Loading;
