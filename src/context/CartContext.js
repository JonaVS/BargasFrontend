import React, { createContext } from "react"
import { useLocalStorage } from "../customHooks/useLocalStorage"
import { v4 as uuid } from "uuid"
import {ToastType, toastDispatcher} from '../helpers/toastDispatcher'
import agent from "../API/agent"
import { clientOrderBuilder } from "../helpers/clientOrderBuilder"

export const CartContext = createContext([{}])

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cart", [])

  const getCartTotal = () => {
    let subTotal = 0
    //The total for products only
    cart.forEach(item => (subTotal += parseInt(item.subTotal)))
    return subTotal
  }

  const addToCart = (productData, formData) => {
    const cartItem = {
      ...productData,
      ...formData,
      id: productData.strapi_id,
      inCartId: uuid(),
    }
    setCart([...cart, cartItem])
    toastDispatcher(
      ToastType.SUCCESS,
      `${productData.name} x ${formData.quantity} agregado`
    )
  }

  const editCartItem = (productData, formData, handleCloseEditModal) => {
    let updatedCart = cart.map(item => {
      if (item.inCartId === productData.inCartId) {
        return {
          ...item,
          ...formData
        }
      }
      return item
    })
    handleCloseEditModal()
    setCart(updatedCart)
  }

  const deleteCartItem = inCartId => {
    let newCart = cart.filter(item => item.inCartId !== inCartId)
    setCart(newCart)
  }

  const sortCart = keyToSort => {
    let newCart = [...cart]  
    newCart.sort((b, a) => {
      if (a[keyToSort] > b[keyToSort]) return 1
      if (a[keyToSort] < b[keyToSort]) return -1
      return 0
    })
    setCart(newCart)
  } 

  const cartTotal = getCartTotal()

  const placeOrder = async (orderFormData) => {
    try {
      return await agent.ordering.placeOrder(
        clientOrderBuilder(cart, orderFormData),
        { withCredentials: true }
      )
    } catch (error) {
      return error
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        cartTotal,
        addToCart,
        editCartItem,
        deleteCartItem,
        sortCart,
        placeOrder
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
