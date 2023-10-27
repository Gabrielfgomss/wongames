"use client"

import { Email, Lock, ErrorOutline } from "@styled-icons/material-outlined"
import Link from "next/link"
import Button from "../Button"
import TextField from "../TextField"
import * as S from "./styles"
import {
  FormLink,
  FormWrapper,
  FormLoading,
  FormError,
} from "../../components/Form"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { FieldErrors, signInValidate } from "../../utils/validations"

const FormSignIn = () => {
  const [formError, setFormError] = useState("")
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({ email: "", password: "" })
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    setLoading(true)

    const errors = signInValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    // sign in
    const result = await signIn("credentials", {
      ...values,
      redirect: false,
      callbackUrl: "/",
    })

    if (result?.url) {
      return push(result?.url)
    }
    setLoading(false)
    // jogar o erro
    setFormError("username or password is invalid")
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          hasError={fieldError?.email}
          onInputChange={(v) => handleInput("email", v)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          hasError={fieldError?.password}
          onInputChange={(v) => handleInput("password", v)}
          icon={<Lock />}
        />
        <Link href="./forgot-password" passHref>
          <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>
        </Link>

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign in now</span>}
        </Button>

        <FormLink>
          Don’t have an account? <Link href="/sign-up">Sign up</Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
