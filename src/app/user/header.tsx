import Image from "next/image";
import { User } from "../../types/user";
import { FC } from "react";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

const UserHeader: FC<{
  name: string | undefined | null;
  email: string | undefined | null;
  image: string | undefined | null;
  hasProvider: boolean;
}> = ({ name, email, image, hasProvider }) => {
  return (
    <div className="w-screen fullScreenMarginRight bg-secondary text-secondary-foreground">
      <div className="container flex gap-5 py-10 items-center">
        <div className="rounded-full relative w-[5rem] h-[5rem] overflow-hidden">
          <Image fill alt="" src={image || ""} />
        </div>
        <div className="flex flex-col gap-3">
          <p>{name}</p>
          <p>{email}</p>
          {hasProvider ? (
            <Link href={`/user/shop`}>
              <Button className="w-full">فروشگاه</Button>
            </Link>
          ) : (
            <Link href={"/user/buildshop"}>
              <Button className="w-full">ساخت فروشگاه</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
