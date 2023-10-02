import React from "react";
import { CustomCard } from "./CustomCard";

export const Display = ({ movieList }) => {
  return (
    <div className="bg-black p-5 rounded shadow-lg">
      <div className="row">
        <div className="col">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary">
              All
            </button>
            <button type="button" class="btn btn-primary">
              Happy
            </button>
            <button type="button" class="btn btn-primary">
              Action
            </button>
          </div>
          <div className="mt-3"> 5 Movies Found!!</div>
          <hr />
        </div>
      </div>

      <div className="row">
        <div className="col d-flex flex-wrap gap-3 justify-content-">
          {movieList.map((item, i) => (
            <CustomCard key={i} searchmovie={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
