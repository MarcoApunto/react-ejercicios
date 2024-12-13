import { FetchingPokeProvider } from './context/FetchingPokemon'
import { PokeList } from './components/products/PokeList'
import { LogIn } from './components/form/LogIn';
import { SignIn } from './components/form/SignIn';

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
      <div>
        <SignIn />
        <LogIn />
      </div>
      <PokeList />
    </FetchingPokeProvider>
  );
}

export default App;
