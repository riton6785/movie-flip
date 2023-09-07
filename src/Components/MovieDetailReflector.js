import React from "react";
import "../Styles/moviedetailreflector.css"

const MovieDetailReflector = ({
    name,
    budget,
    original_language,
    genres,
    release_date,
    runtime,
    revenue,
    homepage,
    tagline,
    overview,
    poster_path,
    production_companies,
    production_countries,
}) => {
    return (
        <div className="main_container">
            <div className="basic_info">
                <div className="image">
                    <img
                        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                        alt="Hello"
                    />
                </div>
                <div className="basic_content">
                    <h1>{name}</h1>
                    <div className="genres">
                        <h2>genres</h2>
                        {genres ? (
                            genres.map((genres, index) => (
                                <span key={index}>{genres.name}</span>
                            ))
                        ) : (
                            <h1>Hello</h1>
                        )}
                    </div>
                    <div className="runtime">
                        <h1>Runtime: {runtime}</h1>
                    </div>
                    <div className="tagline">
                        <h1>Tagline: {tagline}</h1>
                    </div>
                </div>
            </div>
            <h1>Budget: {budget}</h1>
            <h1>Original language : {original_language}</h1>
            <div className="release_date">
                <h1>Release date: {release_date}</h1>
            </div>
            <div className="revenue">
                <h1>Revenue: {revenue}</h1>
            </div>
            <div className="overview">
                <span>Overview: {overview}</span>
            </div>
            <div className="homepage">
                <a href={homepage}>Homepage</a>
            </div>
            <div className="production_companies">
                <h1>Production companies</h1>
                {production_companies ? (
                    production_companies.map((company, index) => (
                        <span key={index}>{company.name}</span>
                    ))
                ) : (
                    <h1>Hello</h1>
                )}
            </div>
            <div className="production_countries">
                <h1>Production Countries</h1>
                {production_countries ? (
                    production_countries.map((country, index) => (
                        <span>{country.name}</span>
                    ))
                ) : (
                    <h1>Hello</h1>
                )}
            </div>
        </div>
    );
};

export default MovieDetailReflector;
