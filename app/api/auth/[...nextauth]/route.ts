import { PrismaAdapter } from "@next-auth/prisma-adapter";
import nextAuth from "next-auth";
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import db from "@/prisma/db";
import bcrypt from "bcrypt";


export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "someone@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // console.log("credentials", credentials)

                const user = await db.user.findFirst({
                    where: {
                        email: credentials?.email
                    }
                })

                if (!user) {
                    throw new Error("No user found")
                }
                const validPassword = await bcrypt.compare(credentials?.password as string, user?.password as string)

                if (!validPassword) {
                    throw new Error("Invalid password")
                }
                
                return user
            }
        },)
    ],
    pages: {
        signIn: "/auth/signin",
    }
}

const handler = nextAuth(authOptions);
export { handler as GET, handler as POST }