import Image from "next/image";
import { FC } from "react";
import { AiOutlineBell, AiOutlineFlag, AiOutlineHeart } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";

interface Props {
  id?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  image?: string | null | undefined;
  loans?: number | null | undefined;
  prepayment?: number | null | undefined;
  providerId?: string | undefined;
  price: number | null | undefined
}

const Heading: FC<Props> = ({ name, description, providerId, price }) => {
  return (
    <div className="flex border p-5 rounded items-center">
      <div className="relative h-[20rem] w-[10rem] overflow-hidden rounded ml-10">
        <Image fill src={"/p3.jpg"} className="object-cover" alt="" />
      </div>
      <div className="flex flex-col items-center gap-3">
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="grid grid-cols-3 gap-2 w-full my-5">
          {Array(3)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="border rounded grid place-items-center h-10"
              >
                {(i + 1) * 10}
              </div>
            ))}
        </div>
        <div className="flex gap-2">
          <AiOutlineBell size={30} />
          <AiOutlineHeart size={30} />
          <FiShare2 size={30} />
          <div className="flex items-center">
            <AiOutlineFlag size={25} />
            <p className="text-sm mr-2">گزارش</p>
          </div>
        </div>
        <div className="bg-red-500 rounded w-full flex items-center justify-between px-5 py-3 text-white">
          <div>
            <p className="mb-3">خرید از {providerId}</p>
            <p>{price}</p>
          </div>
          <p>ارزانترین</p>
        </div>
      </div>
    </div>
  );
};

export default Heading;
