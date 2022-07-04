import React, { Fragment } from "react"
import { useInputValue } from "../../hooks/useInputValue"
import { Form, Input, Title, Container, Error } from "./style"
import { SubmitButton } from "../SubmitButton"

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Container>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder="Email" {...email} />
        <Input disabled={disabled} placeholder="Password" type="password" {...password} />
        <SubmitButton disabled={disabled} >{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </Container>
  )
}
