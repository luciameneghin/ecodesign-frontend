import { createContext, useState, useContext } from 'react'


const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false)


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

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity > 0) {
      setCart(cart.map(item => {
        return item.id === id ? { ...item, quantity: newQuantity } : item
      }))
    }

  }

  let values = {
    cart,
    setCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    isCartOpen,
    setIsCartOpen
  }

  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;
export const useCart = () => useContext(CartContext);