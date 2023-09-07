import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./MovieDetailReflector"
import MovieDetailReflector from './MovieDetailReflector'

const MoviesDetail = () => {
    const [details , setDetails] = useState([]) // store data fetched by the api
    const params = useParams() //used to take the id of the movies from the URL so that we can fetch its detail by passing it on api
    useEffect(()=>{
        const fetchMovieDetail = async ()=>{
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=dbbccafb395543635d501a509dbd4558&language=en-US
            `)
            console.log(response.data)
            setDetails(response.data)
        }
        fetchMovieDetail()
    },[])
  return (
    <div className="main_container">
       {
          details ?
          <MovieDetailReflector
           name={details.title}
           budget={details.budget}
           original_language = {details.original_language}
           genres = {details.genres}
           release_date = {details.release_date}
           revenue = {details.revenue}
           runtime = {details.runtime}
           homepage = {details.homepage}
           tagline = {details.tagline}
           overview = {details.overview}
           poster_path = {details.poster_path}
           production_companies = {details.production_companies}
           production_countries = {details.production_countries}

          />
          : <h1>Hello</h1>
       }
    </div>
  )
}

export default MoviesDetail