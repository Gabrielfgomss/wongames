"use client"

import { usePathname } from "next/navigation"
import { Container } from "../../components/Container"
import Heading from "../../components/Heading"
import ProfileMenu from "../../components/ProfileMenu"

import * as S from "./styles"

export type ProfileTemplateProps = {
  children: React.ReactNode
}

const Profile = ({ children }: ProfileTemplateProps) => {
  const pathname = usePathname()
  return (
    <Container>
      <Heading lineLeft lineColor="secondary">
        My profile
      </Heading>
      <S.Main>
        <ProfileMenu activeLink={pathname} />
        <S.Content>{children}</S.Content>
      </S.Main>
    </Container>
  )
}

export default Profile
