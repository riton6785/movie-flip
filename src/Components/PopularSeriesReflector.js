import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/popularSeriesReflector.css"

const PopularSeriesReflector = ({id,image,title,popularity,firstEpisode,tmdbRating}) => {
  return (
      <Link to = {`${id}`} className="popular_page_main_card">
            <div className="img_container">
            <img src={`https://image.tmdb.org/t/p/original/${image}`} alt="Hello"/>
            </div>
            <div className="content_container">
            <h1>{title}</h1>
            <h4>{`popularity:${popularity}`}</h4>
            <h4>{`firstEpisode:${firstEpisode}`}</h4>
            <h4>{`tmdbRating:${tmdbRating}`}</h4>
            </div>
      </Link>

  )
}

export default PopularSeriesReflector