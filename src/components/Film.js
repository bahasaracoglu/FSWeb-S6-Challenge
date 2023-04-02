import React from "react";
import Accordeon from "./Accordeon";

function Film(props) {
  const { film } = props;

  return (
    <Accordeon title={film.title}>
      <div>
        <div>
          <p>{film.director}</p>
          <p>{film.opening_crawl}</p>
          <p>{film.release_date}</p>
        </div>
      </div>
    </Accordeon>
  );
}

export default Film;
