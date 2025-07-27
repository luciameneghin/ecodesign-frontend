import { createContext, useState, useContext } from 'react'


const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  const addToCart = (newItem) => {
    const { furnitureId, seatId, legsId } = newItem;
    // genero id unico da baseId, seatId, legsId
    const id = `${furnitureId}-${seatId}-${legsId}`

    // controllo se c'è già nel carrello
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
      setCart(cart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ))
    } else {
      setCart([...cart, { ...newItem, id, quantity: 1 }])
    }

  }

  let values = {
    cart,
    setCart,
    addToCart
  }

  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;
export const useCart = () => useContext(CartContext);