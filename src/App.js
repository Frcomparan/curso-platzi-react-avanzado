import React from "react"
import { GlobalStyle } from "./styles/GlobalStyles"
import { Logo } from "./components/Logo"
import { Home } from "./pages/Home"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Detail } from "./pages/Detail"
import { NavBar } from "./components/NavBar"
import { User } from "./pages/User"
import { Favs } from "./pages/Favs"
import { NotRegisteredUser } from "./pages/NotRegisteredUser" 

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}

export const App = () => {

  return (
    <div>
    <BrowserRouter>
      <GlobalStyle></GlobalStyle>
      <Logo />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
        <Route path='/detail/:detailId' element={<Detail />} />
      </Routes>
        <UserLogged>
          {
            ({ isAuth }) => isAuth 
            ? <Routes>
                <Route path='/favs' element={<Favs />} />
                <Route path='/user' element={<User />} />
              </Routes>
            : <Routes>
                <Route path='/user' element={<NotRegisteredUser />} />
                <Route path='/favs' element={<NotRegisteredUser />} /> 
              </Routes>
          }
        </UserLogged>
      <NavBar></NavBar>
    </BrowserRouter>
    </div>
  )
}
