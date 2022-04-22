import React from "react"
import { UserProvider } from "./src/context/UserContext"
import { CartProvider } from "./src/context/CartContext"
import "@fontsource/josefin-slab"
import "@fontsource/niconne"
import "@fontsource/squada-one"
import "./src/GlobalStyles/typography.css"
import "react-toastify/dist/ReactToastify.min.css"
import "./src/GlobalStyles/global.css"

export const wrapRootElement = ({ element }) => (
  <UserProvider>
    <CartProvider>{element}</CartProvider>
  </UserProvider>
)
