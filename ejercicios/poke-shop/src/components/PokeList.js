import { useContext, useEffect, useState } from "react";
import { ActualPokemon } from "./ActualPokemon";
import { FetchingPokeContext } from "../context/FetchingPokemon";
import { releaseOne } from '../utils/cartFunctions'

export function PokeList() {
  const { pokemonList } = useContext(FetchingPokeContext);
  const [cart, setCart] = useState([])
  const [totalCart, setTotalCart] = useState('')

  const handleAddToproductList = (addToCart, price) => {
    let newCart
    if (cart.find(prod => prod.pokemon === addToCart.name)) {
      newCart = cart.map(elem => elem.pokemon === addToCart.name ? { ...elem, quantity: elem.quantity + 1 } : elem)
    } else {
      newCart = [...cart, { pokemon: addToCart.name, quantity: 1, price: price }]
    }
    setCart(newCart)
  }

  useEffect(() => {
    const total = cart.reduce((actualTotal, elem) => actualTotal + elem.price * elem.quantity, 0);
    setTotalCart(total);
  }, [cart])

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
        {cart && cart.length > 0 ? (
          <>
            <h2>Caja de Pokemon </h2>
            {cart.map((poke, i) => (
              <>
                <div key={i}>
                  {poke.pokemon} {poke.price}€ x {poke.quantity}
                  <br />
                  <button onClick={() => releaseOne(poke, i, cart, setCart, totalCart, setTotalCart)}>
                    Liberar 1
                  </button>
                  <button onClick={() => setCart(cart.filter((_, index) => index !== i))}>
                    Liberar todos
                  </button>

                </div>
                <br />
              </>
            ))}
          </>
        ) : ("")}
        {totalCart && cart.length > 0 ?
        (<div>
          <h2>Total: <span>{totalCart}€</span></h2>
        </div>)
        : ("")}
      </aside >
    </>
  );
}