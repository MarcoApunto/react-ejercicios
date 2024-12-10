import { FetchingPokeProvider } from './context/FetchingPokemon';
import { PokeList } from './components/PokeList'
import './App.css';


function App() {

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
