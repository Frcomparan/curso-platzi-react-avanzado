import React, { Fragment, useContext } from "react"
import { Context } from "../Context"
import { SubmitButton } from "../components/SubmitButton"
import { Container } from "../components/UserForm/style"

export const User = () => {
  const { removeAuth } = useContext(Context)

  return <Container>
    <h1>User</h1>
    <SubmitButton onClick={removeAuth}>Cerrar sessión</SubmitButton>
  </Container>
}
