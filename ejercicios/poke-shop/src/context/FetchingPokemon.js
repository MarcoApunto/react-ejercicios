import React from "react";
import { createContext, useState, useEffect } from "react";

export const FetchingPokeContext = createContext();

export const FetchingPokeProvider = ({ children }) => {
	const [searchPoke, setSearchPoke] = useState([])
	const [poke, setPoke] = useState("pikachu")

	useEffect(() => {
		const getSomePoke = async () => {
			const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
			const data = await res.json()
			
			setSearchPoke(data)
		}
		getSomePoke()
	}, [poke])

	return (
		<FetchingPokeContext.Provider value={{ searchPoke, setPoke }}>
			{children}
		</FetchingPokeContext.Provider>
	)
}