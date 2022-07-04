import React, { Fragment, useContext } from "react"
import { Context } from "../Context"
import { UserForm } from "../components/UserForm"
import { useRegisterMutation } from "../container/RegisterMutation"
import { useLoginMutation } from "../container/LoginMutation"

export const NotRegisteredUser = () => {
  const { registerMutation, dataRegister, loading: loadingRegister, error: errorRegister } = useRegisterMutation()
  const { loginMutation, dataLogin, loading: loadingLogin, error: errorLogin } = useLoginMutation()
  const { activateAuth } = useContext(Context)

  const onSubmit = ({email, password}) => {
    const input = { email, password }
    const variables = { input }
    registerMutation({ variables })
    .then(({data}) => {
      const { signup } = data
      activateAuth(signup)
    })
  }
  const errorRegisterMsg = errorRegister && 'El usuario ya existe o hay algún problema'

  const onSubmitLogIn = ({email, password}) => {
    const input = { email, password }
    const variables = { input }
    loginMutation({ variables })
    .then(({data}) => {
      const { login } = data
      activateAuth(login)
    })
  }
  const errorLoginMsg = errorLogin && 'La contraseña es incorrecta o el usuario no existe'
  return (
    <Fragment>
      <UserForm error={errorRegisterMsg} disabled={loadingRegister} title='Registrarse' onSubmit={onSubmit} />
      <UserForm error={errorLoginMsg} disabled={loadingLogin} title='Iniciar Sesión' onSubmit={onSubmitLogIn} />
    </Fragment>
  )
}
