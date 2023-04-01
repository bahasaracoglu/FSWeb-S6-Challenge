import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import Film from "./Film";

export default function Karakter(props) {
  const { karakterler } = props;
  const [open, setOpen] = useState({});
  const toggle = (id) => {
    if (open[id]) {
      setOpen({ ...open, [id]: false });
    } else {
      setOpen({ ...open, [id]: true });
    }
  };
  if (!karakterler) return <h3>Yükleniyor...</h3>;

  return karakterler.map((karakter) => (
    <div className="karakterler">
      <Accordion
        open={open[karakter.name]}
        toggle={() => toggle(karakter.name)}
      >
        <AccordionItem>
          <AccordionHeader targetId="1">{karakter.name}</AccordionHeader>
          <AccordionBody accordionId="1">
            <p>Gender: {karakter.gender}</p>
            <p>Height: {karakter.height}</p>
            <p>Mass: {karakter.mass}</p>
            <p>Birth Year: {karakter.birth_year}</p>
            <p>Eye Color: {karakter.eye_color}</p>
            <p>Hair Color: {karakter.hair_color}</p>
            <p>Skin Color: {karakter.skin_color}</p>
            <p>Appears in {karakter.films.length} movies</p>
            <Film />
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  ));
}

/*
  const { karakterler } = props;
  if (!karakterler) return <h3>Yükleniyor...</h3>;
  return karakterler.map((karakter) => (
    <div className="karakterler" key={karakterler.name}>
      <h3>{karakter.name}</h3>
      <p>{karakter.gender}</p>
      <p>{karakter.height}</p>
      <p>{karakter.mass}</p>
      <p>{karakter.birth_year}</p>
      <p>{karakter.eye_color}</p>
      <p>{karakter.hair_color}</p>
      <p>{karakter.skin_color}</p>
      <p>Appears in {karakter.films.length} movies</p>
    </div>
  ));
}*/
