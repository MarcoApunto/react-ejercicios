import { useState } from "react"

export const useFetchPoke = () => {
    const [cart, setCart] = useState([])

    const handleAddToproductList = (addCart) => {
        setCart([...cart, addCart])
    };

}