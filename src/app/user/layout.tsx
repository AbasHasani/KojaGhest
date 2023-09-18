// import { getServerSession } from "next-auth";
import UserHeader from "./header";
// import { authOptions } from "../api/auth/[...nextauth]/route";
// import { prisma } from "@/db";
// import { getUser } from "./session";

const UserLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* @ts-ignore */}
      <UserHeader />
      {children}
    </div>
  );
};

export default UserLayout;
