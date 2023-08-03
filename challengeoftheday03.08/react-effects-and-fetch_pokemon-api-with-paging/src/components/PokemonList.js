import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [number, setNumber] = useState (0)

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${number}`
        );
        const data = await response.json();
        setPokemon(data.results);
        let nextpage = data.next
        console.log(nextpage)
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [number]);

  return (
    <main>
      <button type="button" onClick={() => setNumber(number-20)}>Previous Page</button>
      <button type="button" onClick={() => setNumber(number+20)}>Next Page</button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
