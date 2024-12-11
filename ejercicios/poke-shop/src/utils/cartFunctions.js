export const releaseOne = (drop, i, cart, setCart) => {
    if (cart.find(prod => prod.pokemon === drop.pokemon)) {
        if (drop.quantity > 1) {
            const freeThatPoke = cart.map(elem => elem.pokemon === drop.pokemon ? { ...cart, pokemon: elem.pokemon, quantity: elem.quantity - 1 } : elem)

            return setCart([...freeThatPoke])
        } else {
            setCart(cart.filter((_, index) => index !== i))
        }
    }
}
