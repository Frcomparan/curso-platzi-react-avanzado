import React from "react"
import { Grid, Link, Img } from "./style"

export const ListOfFavs = ({ favs = [] }) => {

  return (
    <Grid>
    <h1>Favs</h1>
    {
      favs.map(fav => <Link key={fav.id} to={`/details/${fav.id}`}>
        <Img src={fav.src} ></Img>
      </Link>)
    }
  </Grid>
  )
}
