// import { getServerSession } from "next-auth";
import UserHeader from "./header";
// import { authOptions } from "../api/auth/[...nextauth]/route";
// import { prisma } from "@/db";
// import { getUser } from "./session";

const UserLayout = async ({ children }: { children: React.ReactNode }) => {
  // const session = await getServerSession(authOptions);
  // const { id } = await getUser();
  // const hasProvider = await prisma.provider.findUnique({
  //   where: { userId: id },
  // });
  return (
    <div>
      {/* @ts-ignore */}
      <UserHeader
        name="Abas Hasani"
        email="14abbas.hassani@gmail.com"
        image="/p2.jpg"
        hasProvider={false}
      />
      {children}
    </div>
  );
};

export default UserLayout;
