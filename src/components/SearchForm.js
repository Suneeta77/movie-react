import React, { useEffect, useRef, useState } from "react";
import { fetchMovie } from "../utils/axiosHelper";
import { CustomCard } from "./CustomCard";
import { randomCharGenerator } from "../utils/randomStr";

export const SearchForm = ({ addToMovieList }) => {
  const [searchmovie, setMovie] = useState({});
  const strRef = useRef("");
  const [error, setError] = useState("");

  useEffect(() => {
    const randChar = randomCharGenerator();

    //IEFE
    (async () => {
      const randMovie = await fetchMovie(randChar);
      setMovie(randMovie);
    })();
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setMovie({});
    setError("");

    const str = strRef.current.value;

    const data = await fetchMovie(str);
    if (data?.Response === "True") {
      setMovie(data);
    } else {
      setError(data?.Error);
    }
  };
  const func = (mode) => {
    addToMovieList({ ...searchmovie, mode });
    setMovie({});
    strRef.current.value = "";
  };
  const handleOnDelete = () => {
    setMovie({});
  };

  return (
    <div className="bg-black p-5 rounded shadow-lg">
      <div className="row gap-4">
        <div className="col-md">
          <form onSubmit={handleOnSubmit}>
            <div class="mb-3">
              <input
                ref={strRef}
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Search your movie ..."
              />
            </div>
            <div className="d-grid">
              <button type="submit" class="btn btn-warning">
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="col-md d-flex justify-content-center">
          {error && <div className="alert alert-danger"> {error}</div>}

          {searchmovie?.imdbID && (
            <CustomCard
              searchmovie={searchmovie}
              func={func}
              deleteFun={handleOnDelete}
            />
          )}
        </div>
      </div>
    </div>
  );
};
