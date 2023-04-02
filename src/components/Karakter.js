import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";

import Filmler from "./Filmler";
import axios from "axios";
import Accordeon from "./Accordeon";

//import Arrow from "../assets/Arrow.svg";

function Karakter() {
  const [karakterler, setKarakterler] = useState([]);
  const [filmler, setFilmler] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const karakterPromise = axios.get("https://swapi.dev/api/people/");
    const filmlerPromise = axios.get("https://swapi.dev/api/films/");

    Promise.all([karakterPromise, filmlerPromise]).then((values) => {
      setKarakterler(values[0].data);
      console.log(values[0].data);
      setFilmler(values[1].data[0].results);
      console.log(values[1].data[0].results);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading && <h2>Yükleniyor...</h2>}
      {!loading &&
        karakterler.map((karakter, i) => {
          return (
            <Accordeon key={"c" + i} title={karakter.name}>
              <p>
                <span>Gender: </span>
                {karakter.gender}
              </p>
              <p>
                <span>Height: </span>
                {karakter.height}
              </p>
              <p>
                <span>Mass: </span>
                {karakter.mass}
              </p>
              <p>
                <span>Birth Year: </span>
                {karakter.birth_year}
              </p>
              <p>
                <span>Eye Color: </span>
                {karakter.eye_color}
              </p>
              <p>
                <span>Hair Color: </span>
                {karakter.hair_color}
              </p>
              <p>
                <span>Skin Color: </span>
                {karakter.skin_color}
              </p>
              <p>
                <span>Appears in </span>
                {karakter.films.length} movies
              </p>

              <Filmler filmler={filmler} i={i} karakter={karakter} />
            </Accordeon>
          );
        })}
    </div>
  );
}
export default Karakter;
