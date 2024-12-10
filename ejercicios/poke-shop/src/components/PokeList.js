import { useContext, useEffect } from "react"
import { useFetchPoke } from '../hooks/useFetchPoke';
import { ActualPokemon } from "./ActualPokemon";
import { FetchingPokeContext } from "../context/FetchingPokemon";

export function PokeList() {
  const { setPoke } = useContext(FetchingPokeContext)
  const [specPokemon] = useFetchPoke()

  /* Si cambio la posicion del @param specPokemon, me muestra solamente ese pokemon
  Pero enseña tantas veces de largo es el endpoint limit */
  useEffect(() => {
    if (specPokemon) {
      setPoke(specPokemon[3])
    console.log(specPokemon)}
  })

  return (
    <section>
      {specPokemon?.map((_, i) => (
        <div key={i}>
          <ActualPokemon />
        </div>
      ))}
    </section>
  )
}

/* <img
              src={searchPoke.sprites ? searchPoke.sprites.other.home.front_default : "/imgs/img_not_available.png"}
              alt={searchPoke.name}
            >
            </img>
            <h2>{searchPoke.name}</h2>
            <button type="button" value="Gotcha!">Gotcha!</button> */