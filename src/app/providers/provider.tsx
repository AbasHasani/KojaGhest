import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  id: string | number;
  name: string | null;
  image: string | null;
  // createdAt: Date;
  // updatedAt: Date;
  highestCredit: number;
  website: string;
  specialContracts: string;
  // userId: string;
}

const Provider: FC<Props> = ({
  name,
  image,
  id,
  highestCredit,
  specialContracts,
  website,
}) => {
  return (
    <div className="flex items-center gap-2 justify-between border-info/50 my-3 rounded shadow p-6">
      <div>
        <p className="font-bold text-black text-lg">{name}</p>
        <p>سقف میزان اعتبار:{highestCredit} تومان</p>
        <p>نوع ضمانت: {specialContracts}</p>
        <p>نوع اعتبارکیف پول</p>
      </div>
      <div className="flex flex-col items-center">
        <Link href={`/providers/${id}`}>
          <Image
            src={image || "/p3.jpg"}
            width={70}
            height={70}
            className="rounded"
            alt={name || ""}
          />
        </Link>
        <Link href={`/providers/${id}`}>
          <p className="p-1 mt-2 bg-secondary/10 rounded">توضیحات بیشتر...</p>
        </Link>
      </div>
    </div>
  );
};

export default Provider;
