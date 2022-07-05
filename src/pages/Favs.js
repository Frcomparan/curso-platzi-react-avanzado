import React, { Fragment } from "react"
import { useGetFavorites } from "../hooks/useGetFavorites"
import { ListOfFavs } from "../components/ListOfFavs"
import { Layout } from "../components/Layout"

export default () => {
  const { loading, error, data } = useGetFavorites()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  const { favs } = data

  return (
    <Layout title='Tus favoritos' subtitle='Aqui puedes encontrar tus favoritos'>
      <ListOfFavs favs={favs} />
    </Layout>
  )
}
