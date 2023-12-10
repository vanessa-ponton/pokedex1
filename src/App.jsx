import PokemonCard from "./components/PokemonCard";


import './index.css';



function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  const pokemonSelected = pokemonList[0];

  return (
    <div>
      <PokemonCard pokemon={pokemonSelected} />

    </div>
  );

}


export default App;

