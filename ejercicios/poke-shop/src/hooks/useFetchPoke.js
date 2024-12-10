import { useEffect, useState } from 'react';

export const useFetchPoke = () => {
  const [specPokemon, setSpecPoke] = useState();

  useEffect(() => {
    const fetchArr = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=9`)
      const data = await res.json()

      setSpecPoke(data.results.map(re => (re.name)).sort())
    }

    fetchArr()
  }, [])

  return [specPokemon]
}