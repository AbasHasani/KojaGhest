import Image from "next/image";
import { FC } from "react";

interface Props {
  name: string;
  image: string | null;
}

const Article: FC<Props> = ({ name, image }) => {
  return (
    <div className="flex justify-between items-center group rounded shadow-lg bg-black/5 hover:bg-black/10">
      <div className="mr-3">
        <p className="transition-all group-hover:text-cyan-600 group-hover:text-lg group-hover:font-bold">چگونه حساب کاربری بسازیم؟</p>
      </div>
      <div className="flex overflow-hidden">
        <div className="relative h-[10rem] w-[10rem]">
          <Image src={image || ""} className="rounded-l bg-black" fill alt="" />
        </div>
      </div>
    </div>
  );
};

export default Article;
