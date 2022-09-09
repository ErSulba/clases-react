import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pokemonName, setPokemonName] = useState("")
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/pikachu/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        const { name } = data;
        setPokemonName(name);
      })
      .catch((err) => console.warn(err))
    return () => {

    }
  }, [])

  return (
    <section>
      <form
        action="get"
        method="get"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submit event received");
          fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}`)
            .then((res) => res.json())
            .then((data) => {
              setPokemonName(data.name);
            })
        }}
      >
        <input
          type="text"
          name="name"
          value={searchInput}
          placeholder="SEARCH..."
          onChange={(e) => { setSearchInput(e.target.value) }}
        />
      </form>
      <h1>Pokemon: {pokemonName}</h1>
    </section>
  );
}

export default App;
