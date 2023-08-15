import { Skeleton } from "../components/ui/skeleton";

const Loading = () => {
    return (
      <div className="mt -5">
        <Skeleton className="bg-gray-600 w-[6rem] h-[3rem]"/>
      </div>
    );
  };
  
  export default Loading;
  