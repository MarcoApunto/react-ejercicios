export const releaseOne = (drop, i, cart, setCart) => {
  if (cart.some(prod => prod.pokemon === drop.pokemon)) {
    if (drop.quantity > 1) {
      const freeThatPoke = cart.map(elem => elem.pokemon === drop.pokemon ? { ...elem, quantity: elem.quantity - 1 } : elem);
      setCart(freeThatPoke)
    } else {
      setCart(cart.filter((_, index) => index !== i))
    }
  }
};

