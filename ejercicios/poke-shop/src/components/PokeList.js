import { useContext } from "react"
import { useFetchPoke } from '../hooks/useFetchPoke';
import { FetchingPokeContext } from '../context/FetchingPokemon';

export function PokeList() {
  const { searchPoke, setPoke } = useContext(FetchingPokeContext)
  const [specificPokemon] = useFetchPoke();

  return (
    <section>
      {specificPokemon
        ? specificPokemon.map((elem) => (

          <div>
            {setPoke(elem)}
            <img
              src={searchPoke.sprites ? searchPoke.sprites.other.home.front_default : "/imgs/img_not_available.png"}
              alt={searchPoke.name}
            >
            </img>
            <h2>{searchPoke.name}</h2>
            <button type="button" value="Gotcha!">Gotcha!</button>
          </div>
        ))
        : <div><img
          src={searchPoke.sprites ? searchPoke.sprites.other.home.front_default : "/imgs/img_not_available.png"}
          alt={searchPoke.name}
        >
        </img>
          <h2>{searchPoke.name}</h2>
          <button type="button" value="Gotcha!">Gotcha!</button>
        </div>
      }
    </section>

  )
}