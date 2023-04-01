import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import axios from "axios";

export default function Film() {
  const [filmler, setFilmler] = useState();
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/films/")
      .then(function (response) {
        setFilmler(response.data[0].results);
        // handle success
        console.log(response.data[0].results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  if (!filmler) return <h3>Yükleniyor...</h3>;
  return filmler.map((film) => (
    <Accordion
      open={open[film.episode_id]}
      toggle={() => toggle(film.episode_id)}
    >
      <AccordionItem>
        <AccordionHeader targetId="1">{film.title}</AccordionHeader>
        <AccordionBody accordionId="1">
          <p>Gender: {film.gender}</p>
          <p>Height: {film.height}</p>
          <p>Mass: {film.mass}</p>
          <p>Birth Year: {film.birth_year}</p>
          <p>Eye Color: {film.eye_color}</p>
          <p>Hair Color: {film.hair_color}</p>
          <p>Skin Color: {film.skin_color}</p>
          <p>Appears in {film.length} movies</p>
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  ));
}
