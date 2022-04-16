import React from "react"
import { Router } from "@reach/router"
import NotFoundPage from "../404"
import CartPage from "../../features/cart/pages/CartPage"

/*This special page handles client only routes (Gatsby will not 
generate static versions for the pages/components inside the router)

For example: login, signup, cart, profile, and others will go here.
*/
const App = () => {
  return (
    <Router>
      <CartPage path="app/cart"/>
      <NotFoundPage default/>
    </Router>
  )
}

export default App
