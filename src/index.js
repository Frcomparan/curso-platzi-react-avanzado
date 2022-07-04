import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache, ApolloLink, from, HttpLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { App } from './App'
import Context from "./Context"

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')
  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    })
  }
  return forward(operation)
})
const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === 'invalid_token') {
    window.sessionStorage.removeItem('token')
    window.location = '/user'
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache,
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: 'https://petgram-server-frc.vercel.app/graphql'
    })
  ])
})

// const httpLink = createHttpLink({
//   uri: 'https://petgram-server-frc.vercel.app/graphql'
// })

// const authLink = setContext((_, { headers }) => {
//   const token = window.sessionStorage.getItem('token')
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : ''
//     }
//   }
// })

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
//   onError: error => {
//     const { networkError } = error
    // if (networkError && networkError.result.code === 'invalid_token') {
    //   window.sessionStorage.removeItem('token')
    //   window.location.href = '/'
    // }
//   }
// })

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>
)
