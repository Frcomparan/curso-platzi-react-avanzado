import React from "react"
import { Grid, Link, Img } from "./style"
import PropTypes from 'prop-types'

export const ListOfFavs = ({ favs = [] }) => {

  return (
    <Grid>
    {
      favs.map(fav => <Link key={fav.id} to={`/details/${fav.id}`}>
        <Img src={fav.src} ></Img>
      </Link>)
    }
  </Grid>
  )
}

ListOfFavs.propTypes = {
  favs: PropTypes.array(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  )
}
