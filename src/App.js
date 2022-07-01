import React from "react"
import { ListOfCategories } from "./components/ListOfCategories/index"
import { GlobalStyle } from "./styles/GlobalStyles"
import { ListOfPhotoCards } from "./components/ListOfPhotoCards"
import { Logo } from "./components/Logo"

export const App = () => (
  <div>
    <GlobalStyle></GlobalStyle>
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </div>
)
