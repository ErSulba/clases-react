import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  const [pokemonName, setPokemonName] = useState("")
  const [searchInput, setSearchInput] = useState("")
  const [pokemonSprite, setPokemonSprite] = useState()
  const [pokemonDataObject, setPokemonDataObject] = useState()

  // this effect only works once when the component mounts
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/pikachu/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // data = {
        //   name,
        //   sprites: {
        //     front_default
        //   }
        // }
        const { name, sprites: { front_default } } = data;
        setPokemonName(name);
        setPokemonSprite(front_default);
      })
      .catch((err) => console.warn(err))
    return () => {

    }
  }, [])

  return (
    <section>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setPokemonName={setPokemonName}
        setPokemonSprite={setPokemonSprite}
      />
      <h1>Pokemon: {pokemonName}</h1>
      <img src={pokemonSprite ? pokemonSprite : ''} alt="pokemon-sprite" />

    </section>
  );
}

export default App;
