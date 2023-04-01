import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";

import Filmler from "./Filmler";
import axios from "axios";

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
          return <Filmler filmler={filmler} i={i} karakter={karakter} />;
        })}
    </div>
  );
}
export default Karakter;
