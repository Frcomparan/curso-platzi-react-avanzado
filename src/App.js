import React, { useContext, Suspense } from "react"
import { GlobalStyle } from "./styles/GlobalStyles"
import { Logo } from "./components/Logo"
import { Home } from "./pages/Home"
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom"
import { Detail } from "./pages/Detail"
import { NavBar } from "./components/NavBar"
import { User } from "./pages/User"
// import { Favs } from "./pages/Favs"
import { NotRegisteredUser } from "./pages/NotRegisteredUser" 
import { Context } from "./Context"
import { NotFound } from "./pages/NotFound"

const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <BrowserRouter>
      <Suspense fallback={<div />} >
        <GlobalStyle></GlobalStyle>
        <Logo />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/pet/:id' element={<Home />} />
          <Route exact path='/detail/:detailId' element={<Detail />} />
          <Route exact path='/favs' element={isAuth ? <Favs /> : <Navigate replace to='/login' />} />
          <Route exact path='/user' element={isAuth ? <User /> : <Navigate replace to='/login' />} />
          <Route exact path='/login' element={!isAuth ? <NotRegisteredUser /> : <Navigate replace to='/' />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <NavBar></NavBar>
      </Suspense>
    </BrowserRouter>
  )
}
