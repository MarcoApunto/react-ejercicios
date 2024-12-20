import { useEffect, useState } from "react";

export function ActualPokemon({ pokemon, addToCart }) {
  const [price, setPrice] = useState()

  useEffect(() => {
    const randomPrice = Math.floor(Math.random() * (10 - 2) + 1)
    setPrice(randomPrice)
  }, [])

  return (
    <>
      <div className="cover-img">
        <img
          src={pokemon.sprites ? pokemon.sprites.other.home.front_shiny : "/imgs/img_not_available.png"}
          alt={pokemon.name}
        />
      </div>
      <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} - {price}€</h2>
      <button className="button-70" onClick={() => addToCart(pokemon, price)} type="button">Gotcha!</button>
    </>
  );
}
