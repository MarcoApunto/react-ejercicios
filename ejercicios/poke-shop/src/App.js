import { FetchingPokeProvider } from './context/FetchingPokemon'
import { PokeList } from './components/PokeList'
import './App.css';


function App() {

  return (
    <FetchingPokeProvider>
      <header>
        <h1>Poke Shop
          <br />
          (de Pokemon, no de poke hawaiano)
        </h1>
      </header>
      <PokeList />
    </FetchingPokeProvider>
  );
}

export default App;
