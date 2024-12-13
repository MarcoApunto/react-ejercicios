import React, { createContext, useState, useEffect } from "react";

export const FetchingPokeContext = createContext();

export const FetchingPokeProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=493&limit=20`);
      const data = await res.json();

      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
        })
      );

      setPokemonList(pokemonDetails);
    };

    fetchPokemonList();
  }, []);

  return (
    <FetchingPokeContext.Provider value={{ pokemonList }}>
      {children}
    </FetchingPokeContext.Provider>
  );
};