import React, { Fragment } from "react"
import Context from "../Context"
import { UserForm } from "../components/UserForm"
import { useRegisterMutation } from "../container/RegisterMutation"

export const NotRegisteredUser = () => {
  const { registerMutation, data, loading, error } = useRegisterMutation()

  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          const onSubmit = ({email, password}) => {
            const input = { email, password }
            const variables = { input }
            registerMutation({ variables })
            .then(activateAuth)
          }

          const errorMsg = error && 'El usuario ya existe o hay algún problema'

          return (<Fragment>
            <UserForm error={errorMsg} disabled={loading} title='Registrarse' onSubmit={onSubmit} />
            <UserForm title='Iniciar Sesión' onSubmit={activateAuth} />
          </Fragment>)
        }
      }
    </Context.Consumer>
  )
}
