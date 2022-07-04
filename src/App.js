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
import Context from "./Context"

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
        <Context.Consumer>
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
        </Context.Consumer>
      <NavBar></NavBar>
    </BrowserRouter>
    </div>
  )
}
