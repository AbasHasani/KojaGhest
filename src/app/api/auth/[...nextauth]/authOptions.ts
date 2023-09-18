import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import { prisma } from "@/db";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        number: {
          label: "Code",
          type: "text",
          placeholder: "",
        },
      },
      async authorize(credentials) {
        let user = await prisma.user.findUnique({
          where: { number: credentials?.number },
        });
        if (!user) {
          user = await prisma.user.create({
            data: { number: credentials?.number || "" },
          });
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      // the user present here gets the same data as received from DB call  made above -> fetchUserInfo(credentials.opt)

      return { ...token, ...user };
    },
    //@ts-ignore
    async session({ session, user, token }) {
      // user param present in the session(function) does not recive all the data from DB call -> fetchUserInfo(credentials.opt)

      return token;
    },
  },
};
