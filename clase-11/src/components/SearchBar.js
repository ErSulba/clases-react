import React from 'react'

const SearchBar = (props) => {
  const { searchInput, setSearchInput, setPokemonName, setPokemonSprite } = props;
  return (
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
            setPokemonSprite(data.sprites.front_default)
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
  )
}

export default SearchBar