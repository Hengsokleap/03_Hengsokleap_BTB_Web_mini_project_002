import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginService } from "./service/login-service";

export const { auth, signOut, signIn } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        const res = await loginService({ email, password });
        console.log("res==========",res)
        return res;
      },
    }),
  ],
  callbacks: {
    async jwt(token) {
      return token;
    },
    async session(props) {
      console.log("props",props)
      const { token } = props;
      return token.token.user;
    },
  },
  strategy: "jwt",

  pages: {
    signIn: "/login",
  },
});