import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import PopularMoviesReflector from './PopularMoviesReflector'

const SearchMovie = () => {
    const [searched , setSearched] = useState([]) // store the results fetched from api
    const params = useParams()  //use to fetch the name of the movie from the url
    useEffect(()=>{
        const fetchMovieDetail = async()=>{
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=dbbccafb395543635d501a509dbd4558&query=${params.searchedmovies}`)
            console.log(response.data)
            setSearched(response.data.results)
        }
        // function to fetch the list of movies matching th searched data 
        fetchMovieDetail()
    },[])
  return (
    <div>
      <div className="popular_page">
      {
        searched ?
        searched.map((movie)=>(
          <PopularMoviesReflector 
       id = {movie.id}
       image = {movie.poster_path}
       title = {movie.title}
       popularity = {movie.popularity}
       releaseDate = {movie.release_date}
       tmdbRating = {movie.vote_average}
       />
        ))
        : <h1>Not found</h1>
      }
      </div>
    </div>
  )
}

export default SearchMovie
// NOTE
// here the query ,parameter is encodeed we have to encode space of searchd data with %20 for more refrence refer api https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=The%20Dark%20Knight
 