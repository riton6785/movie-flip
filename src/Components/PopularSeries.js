import React, { useEffect, useState } from "react";
import axios from "axios";
import PopularSeriesReflector from "./PopularSeriesReflector";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai/";
import "../Styles/popularSeries.css";
import "../Styles/searchbox.css";

const PopularSeries = () => {
  const [series, setSeries] = useState([]); //store the data fetched from api
  const [page, setPage] = useState(1); // use to store the pagenumber
  const [searchedData, setSearchedData] = useState(""); // use to store the searched data using the input tag by the user
  // used to redirect to the route data searched by the user
  // Note it just redirect to the route component that to be shown on that route is handled by the router
  const navigate = useNavigate();

  useEffect(() => {
    const fetchseries = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=dbbccafb395543635d501a509dbd4558&page=${page}`
      );
      // console.log(response)
      console.log(typeof response.data.results);
      setSeries(response.data.results);
      console.log(typeof series);
    };
    console.log(page);
    // function to fetch data from the api
    fetchseries();
  }, [page]);

  // function to execute the search button on click of eneter key
  const handleKeyPress = (ev) => {
    if (ev.key === "Enter") {
      handleClick();
    }
  };
  // function to redirect the user to searcheddata
  const handleClick = () => {
    navigate(`/series/search/${searchedData}`); // Navigate to a new URL
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
        <button>
          <AiOutlineSearch onClick={handleClick} id="btn_search" />
        </button>
      </div>
      <div className="popular_page">
        {series ? (
          series.map((series) => (
            <PopularSeriesReflector
              id={series.id}
              image={series.poster_path}
              title={series.name}
              popularity={series.popularity}
              firstEpisode={series.first_air_date}
              tmdbRating={series.vote_average}
            />
          ))
        ) : (
          <h1>Helo</h1>
        )}
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

export default PopularSeries;
