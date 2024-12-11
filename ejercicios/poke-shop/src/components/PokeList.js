import { useContext, useState } from "react";
import { ActualPokemon } from "./ActualPokemon";
import { FetchingPokeContext } from "../context/FetchingPokemon";
import { releaseOne } from '../utils/cartFunctions'

export function PokeList() {
  const { pokemonList } = useContext(FetchingPokeContext);
  const [cart, setCart] = useState([])

  const handleAddToproductList = (addCart, price) => {
    if (cart.find(prod => prod.pokemon === addCart.name)) {
      const newQuantity = cart.map(elem => elem.pokemon === addCart.name ? { ...cart, pokemon: elem.pokemon, quantity: elem.quantity + 1, price: elem.price } : elem)
      return setCart([...newQuantity])
    }
    setCart([...cart, { pokemon: addCart.name, quantity: 1, price: price}])
  }

  return (
    <>
      <section>
        {pokemonList.map((pokemon) => (
          <div key={pokemon.id}>
            <ActualPokemon pokemon={pokemon} addToCart={handleAddToproductList} />
          </div>
        ))}
      </section>
      <aside>
        <h2>Caja de Pokemon </h2>
        {cart ? (
          cart.map((poke, i) => (
            <>
              <div key={i}>
                {poke.pokemon} {poke.price}€ x {poke.quantity}
                <br />
                <button onClick={() => setCart(cart.filter((_, index) => index !== i))}>
                  Liberar todos
                </button>
                <button onClick={() => releaseOne(poke, i, cart, setCart)}>
                  Liberar 1
                </button>
              </div>
              <br />
            </>
          )))
          : ("")}
      </aside >
    </>
  );
}