import Link from "next/link";
import { Skeleton } from "../components/ui/skeleton";

const Loading = () => {
  const categories = [
    {
      title: "موبایل",
      items: ["آیفون", "سامسونگ", "شیایومی", "هوآوی", "نوکیا", "ال جی"],
    },
    {
      title: "کنسول بازی",
      items: ["PS5", "PS4", "XBOX"],
    },
    {
      title: "سرمایشی کولر",
      items: ["کولر گازی", "کولر آبی"],
    },
  ];
  return (
    <div className="grid grid-cols-3 mt-5">
      {categories.map(({ title, items }) => (
        <div key={title}>
          <Skeleton className="font-bold text-lg w-[7rem] h-[2rem] bg-gray-600 mb-2 rounded"></Skeleton>
          {items.map((item) => (
            <Skeleton key={item} className="w-[6rem] h-[1rem] bg-gray-600 mb-2 rounded" />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Loading;
