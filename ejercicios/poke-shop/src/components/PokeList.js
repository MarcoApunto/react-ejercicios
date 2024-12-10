import { useContext } from "react"
import { FetchingPokeContext } from '../context/FetchingPokemon';

export function PokeList() {
  const { searchPoke } = useContext(FetchingPokeContext)

  return (
    <>
      <img
        src={searchPoke.sprites ? searchPoke.sprites.other.home.front_default : "/imgs/img_not_available.png"}
        alt={searchPoke.name}>
      </img>
      <h2>{searchPoke.name}</h2>
      <button type="button" value="Gotcha!">Gotcha!</button>
    </>

  )
}