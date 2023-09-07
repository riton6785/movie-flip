import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SeriesDetailReflector from './SeriesDetailReflector'

const SeriesDetail = () => {
    const params = useParams() //used to take the id of the series from the URL so that we can fetch its detail by passing it on api
    const [details , setDetails] = useState(null)  // store data fetched by the api
    useEffect(()=>{
        const fetchSeriesDetail = async()=>{
            const response =  await axios.get(`https://api.themoviedb.org/3/tv/${params.id}?api_key=dbbccafb395543635d501a509dbd4558&language=en-US
            `)
            console.log(response.data)
            setDetails(response.data)
        }

        fetchSeriesDetail()
    },[])
  return (
    <div className="main_container">
      {
        details ? (
          <SeriesDetailReflector
          id = {details.id}
          image = {details.poster_path}
          created_by = {details.created_by}
          genres = {details.genres}
          homepage = {details.homepage}
          languages = {details.languages}
          origin_country = {details.origin_country}
          original_language = {details.original_language}
          name = {details.name}
          production_companies = {details.production_companies}
          seasons = {details.seasons}
          type = {details.type}
          overview = {details.overview}
          />)
         :
        <h2>Not found</h2>
      }
    </div>
  )
}

export default SeriesDetail