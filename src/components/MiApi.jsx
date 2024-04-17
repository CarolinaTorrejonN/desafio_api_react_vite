import React, { useEffect, useState } from "react";
import Grilla from "./Grilla"

const MiApi = () => {
  const [characters, setCharacters] = useState([]);

  const obtenerInformacion = async () => {
    try {
      let info = await fetch("https://rickandmortyapi.com/api/character");
      let result = await info.json();
      setCharacters(result.results); // Cambiado de result.data a result.results
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    obtenerInformacion();
  }, []);

  return (
    <div>
      <h1>Rick and Morty en Api</h1>
      <Grilla characters={characters}/>
      {characters.map((character) => {
        return (
          <div key={character.id}> {/* Añado key para cada personaje */}
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
          </div>
        );
      })}
    </div>
  );
};

export default MiApi;
