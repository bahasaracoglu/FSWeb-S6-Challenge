import React from "react";

function Film(props) {
  const { film, i } = props;

  return <div key={"y" + i}>{film.title}</div>;
}

export default Film;
