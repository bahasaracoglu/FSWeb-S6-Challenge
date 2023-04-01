import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Karakter from "./components/Karakter";

const App = () => {
  const [karakterler, setKarakterler] = useState();

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then(function (response) {
        setKarakterler(response.data);
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <div className="App">
      <div>
        <h1 className="Header">Karakterler</h1>
        <Karakter karakterler={karakterler} />
      </div>
    </div>
  );
};

export default App;
