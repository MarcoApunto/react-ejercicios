import { FetchingPokeProvider } from './context/FetchingPokemon';
import { PokeList } from './components/PokeList'
import './App.css';
/* import { useEffect, useState } from 'react';
 */
/* const useFetchPoke = () => {
  const [specPokemon, setSpecPoke] = useState();

  useEffect(() => {
    const fetchArr = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=5`)
      const data = res.json()
      let pokemon = data.results.map(re => pokemon.push([re.name, re.url]))

      setSpecPoke(pokemon.sort())
    }
    fetchArr()
  }, [])

  return [specPokemon]
} */

function App() {
/*const [specificPokemon] = useFetchPoke();
  console.log("dentro de App: ", specificPokemon) */

  return (
    <FetchingPokeProvider>
      <div className="App">
        <h1>Poke (de Pokemon, no de poke hawaiano) Shop</h1>
        <PokeList />
      </div>
    </FetchingPokeProvider>
  );
}

export default App;
