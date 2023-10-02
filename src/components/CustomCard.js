import React from "react";

export const CustomCard = ({ searchmovie, func }) => {
  return (
    <div class="card" style={{ width: "18rem;" }}>
      <img src={searchmovie?.Poster} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{searchmovie?.Title}</h5>
        <p class="card-text"> {searchmovie?.Plot?.slice(0, 50)}...</p>

        {!searchmovie.mode && (
          <div className="d-flex justify-content-between">
            <button className="btn btn-warning" onClick={() => func("happy")}>
              Happy
            </button>
            <button className="btn btn-info" onClick={() => func("action")}>
              Action
            </button>
          </div>
        )}

        <div className="d-grid mt-2">
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};
