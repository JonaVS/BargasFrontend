import React from "react"
import { CartProvider } from "./src/context/CartContext"
import "bootstrap/dist/css/bootstrap.min.css"
import "@fontsource/josefin-slab"
import "@fontsource/niconne"
import "@fontsource/squada-one"
import "./src/GlobalStyles/typography.css"
import 'react-toastify/dist/ReactToastify.min.css'
import "./src/GlobalStyles/global.css"


export const wrapRootElement = ({ element }) => (
    <CartProvider>{element}</CartProvider>
  )
