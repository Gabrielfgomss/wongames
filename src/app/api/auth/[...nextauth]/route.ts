import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions = {
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Sign In",
      credentials: {},
      async authorize({ email, password }) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/local`,
          {
            method: "POST",
            body: new URLSearchParams({ identifier: email, password }),
          },
        )

        const data = await res.json()

        if (data.user) {
          return { ...data.user, jwt: data.jwt }
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, user }) => {
      session.jwt = user.jwt
      session.id = user.id

      return session
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.username
        token.jwt = user.jwt
      }
      return token
    },
  },
}

const handler = NextAuth({
  ...authOptions,
})

export { handler as GET, handler as POST }
