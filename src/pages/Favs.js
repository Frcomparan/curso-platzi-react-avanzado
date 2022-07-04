import React, { Fragment } from "react"
import { useGetFavorites } from "../hooks/useGetFavorites"
import { ListOfFavs } from "../components/ListOfFavs"

export const Favs = () => {
  const { loading, error, data } = useGetFavorites()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  const { favs } = data

  return (
    <Fragment>
      <ListOfFavs favs={favs} />
    </Fragment>
  )
}
