import React from 'react'

const SeriesDetailReflector = ({id,image,created_by,genres,homepage,languages,origin_country,original_language,name,production_companies,seasons,type,overview}) => {
  return (
    <div className="main_container">
        <img src={`https://image.tmdb.org/t/p/original/${image}`} alt="Hello" />
        <h2>{name}</h2>
        <div className="creator">
            <h2>created By</h2>
            {
                created_by.map((creator,index)=>(
                    <span key = {index}>{creator.name}</span>
                ))
            }
        </div>
        <div className="genres">
            <h2>genres</h2>
            {
                genres.map((genres,index)=>(
                   <span key={index}>{genres.name}</span> 
                ))
            }
        </div>
        <div className="homepage">
            <a href={homepage}>Homepage</a>
        </div>
        <div className="language">
            <h2>Languages</h2>
            {
                languages.map((language,index)=>(
                    <span key={index}>{language+" "}</span>

                ))
            }
        </div>
        <div className="origin_country">
            <h2>Origin country</h2>
            {
                origin_country.map((origin_country,index)=>(
                    <span key={index}>{origin_country+" "}</span>

                ))
            }
        </div>
        <div className="original_language">
            <h2>original_language</h2>
            <span>{original_language}</span>
        </div>
        <div className="production_companies">
            <h2>Production Company</h2>
            {
                production_companies.map((company,index)=>(
                    <span key={index}>{company.name+" "}</span>

                ))
            }
        </div>
        <div className="seasons">
            <h2>Seasons</h2>
        </div>
        <div className="type">
            <h2>type</h2>
            <span>{type}</span>
        </div>
        <div className="overview">
            <span>{overview}</span>
        </div>
    </div>
  )
}

export default SeriesDetailReflector