import React from 'react'
import PopularMovies from './Components/PopularMovies'
import PopularSeries from './Components/PopularSeries'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Header from './Components/Header'
import SeriesDetail from './Components/SeriesDetail'
import MoviesDetail from './Components/MoviesDetail'
import SearchMovie from './Components/SearchMovie'
import SearchSeries from './Components/SearchSeries'


const App = () => {
  return (
    <div>
      {/* <PopularMovies/> */}
      {/* <PopularSeries/> */}
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/series/search/:searchedseries" element={<SearchSeries/>} />
          <Route path="/movies/search/:searchedmovies" element={<SearchMovie/>} />
          <Route path="/movies/search/:searchedmovies/:id" element={<MoviesDetail/>} />
          <Route path="/series/search/:searchedseries/:id" element={<SeriesDetail/>} />
          <Route path="/movies" element = {<PopularMovies/>}/>
          <Route path="/series" element = {<PopularSeries/>}/>
          <Route path="/movies/:id" element = {<MoviesDetail/>}/>
          <Route path="/series/:id" element = {<SeriesDetail/>}/>
          <Route path="/series/:searchedText" element = {<SearchSeries/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App