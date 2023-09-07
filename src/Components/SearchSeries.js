import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import PopularSeriesReflector from './PopularSeriesReflector'

const SearchSeries = () => {
    const [searched , setSearched] = useState([]) // store the results fetched from api
    const params = useParams()  //use to fetch the name of the series from the url
    useEffect(()=>{
        const fetchMovieDetail = async()=>{
            const response = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=dbbccafb395543635d501a509dbd4558&query=the ${params.searchedseries}`)
            console.log(params.searchedseries)
            console.log(response.data)
            setSearched(response.data.results)
        }
        // function to fetch the list of series matching th searched data
        fetchMovieDetail()
    },[])
  return (
    <div>
       <div className="popular_page">
            {
                searched ?
                searched.map((searched)=>(
                    <PopularSeriesReflector
                    id = {searched.id}
                    image = {searched.poster_path}
                    title = {searched.name}
                    popularity = {searched.popularity}
                    firstEpisode = {searched.first_air_date}
                    tmdbRating = {searched.vote_average}
                    />
                )) : <h1>Helo</h1>
            }
        </div>
    </div>
  )
}

export default SearchSeries

// NOTE
// here the query ,parameter is not encodeed we can work withour encoding space of searchd data