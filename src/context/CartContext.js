import React, { createContext } from "react"
import { useLocalStorage } from "../customHooks/useLocalStorage"

export const CartContext = createContext([{}])

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useLocalStorage("cart", [])

  const getCartTotal = () => {
    let subTotal = 0
    // let delivery = 2000
    // let discount = 0.5

    //The total for products only
    cart.forEach(item => (subTotal += parseInt(item.price) * item.quantity))

    //This applies the delivery cost
    // subTotal += delivery

    //Set the cartTotal state
    return subTotal
  }

  const cartTotal = getCartTotal()


  return (
    <CartContext.Provider value={{cart, setCart, cartTotal}}>
      {children}
    </CartContext.Provider>
  )
}
