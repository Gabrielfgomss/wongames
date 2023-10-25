"use client"

import { useState, InputHTMLAttributes } from "react"

import * as S from "./styles"

export type TextFieldProps = {
  onInputChange?: (value: string) => void
  label?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  disabled?: boolean
  hasError?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  icon,
  label,
  name,
  initialValue = "",
  onInputChange,
  iconPosition = "left",
  disabled = false,
  hasError,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} hasError={!!hasError}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          {...props}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
        />
      </S.InputWrapper>
      {!!hasError && <S.Error>{hasError}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
