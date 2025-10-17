"use client"

import { useFormStatus } from "react-dom"

import {
  Button,
  type ButtonProps,
} from "@1st/components/chakra"

export const SubmitButton = (props: ButtonProps) => {
  const { pending } = useFormStatus()

  return (
    <Button loading={pending} type="submit" {...props} />
  )
}
