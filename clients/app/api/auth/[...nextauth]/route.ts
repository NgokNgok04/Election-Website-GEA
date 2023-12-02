import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
    // adapter: PrismaAdapter(prisma),
    pages: {
        signIn: '/login'
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: {label: "Username", type: "text"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials) {
                // check is username is valid
                if (!credentials?.username || !credentials.password)
                {
                    return null;
                }

                // check if a user exist
                // const user = await prisma.pemilih.findFirst({
                //     where: {
                //         username: credentials.username
                //     }
                // });
                // const user = {
                //     id : 0,
                //     username: "13522001",
                //     password: "halohalo",
                //     token: "askdjahskdaksdfhasdjfhsdjfj",
                //     isVote: 0
                // }
                const UserCompare = {
                    name: "13522999",
                    accType: true,
                    isVote: 0,
                    password: "sesuatu"
                }

                const res = {
                    name: "13522999",
                    accType: true,
                    isVote: 0,
                }

                if (credentials.username == UserCompare.name && credentials.password == UserCompare.password)
                {
                    return res;
                }
                else
                {
                    return null;
                }
                
                // if (!user){
                //     return null;
                // }
                // const passwordMatch = credentials.username === user.password;
                // if (passwordMatch)
                // {
                //     return null;
                // }
            }
        })
    ],
    secret: "jENvY2EI+kE7CCorY4d5ISOmLKIOajX4OFJeNPT+pZg=",
    debug: true
}

// export default NextAuth(authOptions);
const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}