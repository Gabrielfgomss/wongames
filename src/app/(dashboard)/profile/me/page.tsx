import FormProfile from "@/components/FormProfile"
import Profile from "@/templates/Profile"
import { QUERY_PROFILE_ME } from "../../../../graphql/queries/profile"
import { initializeApolloServer } from "@/lib/client"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export default async function Me() {
  const session = await getServerSession(authOptions)
  const token = session?.user?.jwt
  const { data } = await initializeApolloServer(token)().query({
    query: QUERY_PROFILE_ME,
    fetchPolicy: "no-cache",
  })
  console.log(data)

  return (
    <Profile>
      <FormProfile username={data.me.username} email={data.me.email} />
    </Profile>
  )
}
