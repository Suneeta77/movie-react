import "./App.css";
import React, { useState } from "react";
import { Display } from "./components/Display";
import { SearchForm } from "./components/SearchForm";

function App() {
  const [movieList, setMovieList] = useState([]);

  const addToMovieList = (searchmovie) => {
    setMovieList([...movieList, searchmovie]);
  };
  console.log(movieList);
  return (
    <div className="wrapper bg-dark text-warning min-vh-100">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="mt-5 text-center"> My Movie Collection</h1>
          </div>
        </div>
        <hr />
        {/*  {title} */}

        {/* search area */}

        {/* => form */}
        {/* =>card */}
        <SearchForm addToMovieList={addToMovieList} />

        {/* movie list section */}

        {/* => button */}

        {/* => cards */}
        <Display movieList={movieList} />
      </div>
    </div>
  );
}

export default App;
