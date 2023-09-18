import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { prisma } from "@/db";
import { User } from "@prisma/client";

export const getUser = async (): Promise<User> => {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    //@ts-ignore
    where: { number: session?.number || "" },
  });
  console.log(session)
  if (!user) throw Error("Wrong");
  return user;
};
