import React, { useEffect, useState } from "react";
import PopularMoviesReflector from "./PopularMoviesReflector";
import { AiOutlineSearch } from "react-icons/ai/";
import { useNavigate } from "react-router-dom";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]); //store the data fetched from api
  const [searchedData, setSearchedData] = useState(""); // use to store the searched data using the input tag by the user
  const [page, setPage] = useState(1); // use to store the pagenumber
  // used to redirect to the route data searched by the user
  // Note it just redirect to the route component that to be shown on that route is handled by the router
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPopularMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=dbbccafb395543635d501a509dbd4558&page=${page}`
      );
      // console.log(response)
      const movielist = await response.json();
      setMovies(movielist.results);
      console.log(page);
      console.log(movies);
    };
    // function to fetch data from the api
    fetchPopularMovies();
  }, [page]);

  // function to redirect the user to searcheddata
  const handleClick = () => {
    navigate(`/movies/search/${searchedData}`);
  };

  // function to execute the search button on click of eneter key
  const handleKeyPress = (event) => {
    console.log("_______________", event.key);
    if (event.key === "Enter") {
      handleClick();
    }
  };
  // function to switch pages
  const pageChange = (pagenumber) => {
    setPage(pagenumber);
  };

  return (
    <div className="popular_page_main_container">
      <div className="searchbox">
        <input
          type="text"
          value={searchedData}
          onChange={(e) => setSearchedData(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button id="btn">
          <AiOutlineSearch onClick={handleClick} />
        </button>
        <p>{searchedData}</p>
      </div>
      <div className="popular_page">
        {movies
          ? movies.map((movie) => (
              <PopularMoviesReflector
                id={movie.id}
                image={movie.poster_path}
                title={movie.title}
                popularity={movie.popularity}
                releaseDate={movie.release_date}
                tmdbRating={movie.vote_average}
              />
            ))
          : console.log("HEllo")}
      </div>
      <div className="pager">
        <button className="pager_btn" onClick={() => pageChange(page - 1)}>
          Prev
        </button>
        <button className="pager_btn" onClick={() => pageChange(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PopularMovies;
