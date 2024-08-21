import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
    ],
    adapter: PrismaAdapter(prisma) as Adapter
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }