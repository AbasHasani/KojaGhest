// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route";
// import { prisma } from "@/db";
// import { User } from "@prisma/client";

// export const getUser = async (): Promise<User> => {
//   const session = await getServerSession(authOptions);
//   const user = await prisma.user.findUnique({
//     where: { email: session?.user?.email || undefined },
//   });
//   console.log(session)
//   if (!user) throw Error("Wrong");
//   return user;
// };
