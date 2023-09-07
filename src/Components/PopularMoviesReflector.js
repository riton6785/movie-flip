import React from 'react'
import { Link } from 'react-router-dom'

const PopularMoviesReflector = ({id,image,title,popularity,releaseDate,tmdbRating}) => {
    // console.log(props.results[1].poster_path)
  return (
    <Link to = {`${id}`} className="popular_page_main_card">
      <div>
          <div className="img_container">
          <img src={`https://image.tmdb.org/t/p/original/${image}`} alt="loading the image" />
          </div>
          <div className="content_container">
            <h1>{title}</h1>
            <h4>{`popularity:${popularity}`}</h4>
            <h4>{`Release date:${releaseDate}`}</h4>
            <h4>{`TMDB rating:${tmdbRating}`}</h4>
          </div>
      </div>
    </Link>
  )
}

export default PopularMoviesReflector