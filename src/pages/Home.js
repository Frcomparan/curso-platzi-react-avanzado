import React, { Fragment } from "react"
import { useParams } from "react-router-dom"
import { ListOfCategories } from "../components/ListOfCategories"
import { ListOfPhotoCards } from "../components/ListOfPhotoCards"
import { Helmet } from 'react-helmet'
import { Container } from '../components/UserForm/style'

const HomePage = () => {
  const params = useParams()
  return (
    <Container>
      <Helmet>
        <title>Petgram - Tu app de fotos de mascotas</title>
        <meta name='description' content="Con Petgram puedes encontrar fotos de animales domésticos muy bonitos"/>
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={params.id}/>
    </Container>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
