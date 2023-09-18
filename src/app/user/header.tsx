import Image from "next/image";
import { User } from "../../types/user";
import { FC } from "react";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { getUser } from "./session";
import { prisma } from "@/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

const UserHeader = async () => {
  const { id, number } = await getUser();
  const hasProvider = await prisma.provider.findUnique({
    where: { userId: id },
  });
  return (
    <div className="w-screen fullScreenMarginRight bg-emerald-500 text-black">
      <div className="container flex gap-5 py-10 items-center">
        <div className="rounded-full relative w-[5rem] h-[5rem] overflow-hidden">
          {/* <Image fill alt="" src={image || ""} /> */}
        </div>
        <div className="flex flex-col gap-3">
          <p>{number}</p>
          {hasProvider ? (
            <Link href={`/user/shop`}>
              <Button className="w-full bg-cyan-400">فروشگاه</Button>
            </Link>
          ) : (
            <Link href={"/user/buildshop"}>
              <Button className="w-full bg-cyan-400 text-black">ساخت فروشگاه</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
