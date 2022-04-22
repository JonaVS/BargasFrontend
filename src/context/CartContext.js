import React, { createContext } from "react"
import { useLocalStorage } from "../customHooks/useLocalStorage"
import { v4 as uuid } from "uuid"
import {ToastType, toastDispatcher} from '../helpers/toastDispatcher'

export const CartContext = createContext([{}])

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cart", [])

  const getCartTotal = () => {
    let subTotal = 0
    //The total for products only
    cart.forEach(item => (subTotal += parseInt(item.subTotal)))
    return new Intl.NumberFormat("CRC").format(subTotal)
  }

  const addToCart = (productData, formData) => {
    const cartItem = {
      id: productData.strapi_id,
      inCartId: uuid(),
      name: productData.name,
      price: productData.price,
      discount: productData.discount,
      mains: productData.mains,
      sides: productData.sides,
      sauces: productData.sauces,
      sizes: productData.sizes,
      thumbnail: productData.thumbnail,
      qualityImg: productData.qualityImg,
      ...formData,
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
          quantity: formData.quantity,
          side: formData.side,
          main: formData.main,
          sauce: formData.sauce,
          size: formData.size,
          extraInfo: formData.extraInfo,
          subTotal: formData.subTotal,
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

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        cartTotal,
        addToCart,
        editCartItem,
        deleteCartItem,
        sortCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
