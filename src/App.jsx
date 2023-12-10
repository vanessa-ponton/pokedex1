
import PokemonCard from "./components/PokemonCard";
import './index.css';
import { useState } from "react";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];


  const handleClick = () => {
    setPokemonIndex(pokemonIndex + 1);
  }
  const handleClicked = () => {
    setPokemonIndex(pokemonIndex - 1);
  }

  return (
    <div>
      <PokemonCard pokemonSelected={pokemonList[pokemonIndex]} />
      {pokemonIndex < pokemonList.length - 1 &&
        <button onClick={handleClick}>suivant</button>}
      {pokemonIndex > 0 &&
        <button onClick={handleClicked}>précédent</button>}
    </div>
  );

}


export default App;
/* */



