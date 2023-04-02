import React, { useState, useEffect } from "react";
import Film from "./Film";
//import Arrow from "../assets/Arrow.svg";

function Filmler(props) {
  const { filmler, i, karakter } = props;
  return (
    <h2>
      <p>
        {filmler
          .filter((film) => karakter.films.includes(film.title))
          .map((film, i) => {
            return <Film film={film} i={i} />;
          })}
      </p>
    </h2>
  );
}
export default Filmler;
