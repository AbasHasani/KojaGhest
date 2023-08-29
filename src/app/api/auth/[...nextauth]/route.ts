import { User } from "@/types/user";
import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

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
        const user = {
          id: Math.random().toString(15),
          number: credentials?.number
        };
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

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
