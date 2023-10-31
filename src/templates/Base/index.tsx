"use client"

import { Container } from "../../components/Container"
import Footer from "../../components/Footer"
import Menu from "../../components/Menu"
import * as S from "./styles"
import { useSession } from "next-auth/react"

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  let loading = false
  const { data, status } = useSession()
  if (status === "loading") {
    loading = true
  }
  return (
    <S.Wrapper>
      <Container>
        <Menu userName={data?.user?.username} loading={loading} />
      </Container>
      <S.Content>{children}</S.Content>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}

export default Base
