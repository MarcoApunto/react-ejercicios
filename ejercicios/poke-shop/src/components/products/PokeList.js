import { useContext, useEffect, useState } from "react";
import { ActualPokemon } from "./ActualPokemon";
import { FetchingPokeContext } from "../../context/FetchingPokemon";
import { releaseOne } from '../../utils/cartFunctions'

export function PokeList() {
  const { pokemonList } = useContext(FetchingPokeContext);
  const [cart, setCart] = useState([])
  const [totalCart, setTotalCart] = useState('')

  const handleAddToproductList = (addToCart, price) => {
    let newCart
    let pokeNameCap = (addToCart.name.charAt(0).toUpperCase() + addToCart.name.slice(1)) 
    if (cart.find(prod => prod.pokemon === pokeNameCap)) {
      newCart = cart.map(elem => elem.pokemon === pokeNameCap ? { ...elem, quantity: elem.quantity + 1 } : elem)
    } else {
      newCart = [...cart, { pokemon: pokeNameCap, quantity: 1, price: price }]
    }
    setCart(newCart)
  }

  useEffect(() => {
    const total = cart.reduce((actualTotal, elem) => actualTotal + elem.price * elem.quantity, 0);
    setTotalCart(total);
  }, [cart])

  return (
    <main className="Container">
      <article>
        {pokemonList.map((pokemon) => (
          <div key={pokemon.id}>
            <ActualPokemon pokemon={pokemon} addToCart={handleAddToproductList} />
          </div>
        ))}
      </article>

      {cart && cart.length > 0 ? (
        <>
          <aside>
          {totalCart && cart.length > 0 ?
              (<>
                <div>
                  <h2>Total: <span>{totalCart}€</span></h2>
                </div>
              </>)
              : ("")}
            <h2>Caja de Pokemon </h2>
            {cart.map((poke, i) => (
              <>
                <div key={i}>
                  {poke.pokemon} {poke.price}€ x {poke.quantity}
                  <div>
                    <button onClick={() => releaseOne(poke, i, cart, setCart, totalCart, setTotalCart)}
                      className="btn--remove"
                    >
                      ➖
                    </button>
                    <button onClick={() => setCart(cart.filter((_, index) => index !== i))}
                      className="btn--delete"
                    >
                      ❌
                    </button>
                  </div>
                </div>
                <br />
              </>
            ))}
            
          </aside >
        </>
      ) : ("")}


    </main>
  );
}