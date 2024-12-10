import { FetchingPokeProvider } from './context/FetchingPokemon';
import { PokeList } from './components/PokeList'
import './App.css';


function App() {
/*   const [specificPokemon] = useFetchPoke();

  if (specificPokemon)
    specificPokemon.map(elem => console.log("dentro de App: ", elem)) */
    

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
