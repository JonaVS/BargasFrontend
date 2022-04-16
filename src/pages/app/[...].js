import React from "react"
import { Router } from "@reach/router"
import CartPage from "../../features/cart/pages/CartPage"

/*This special page handles client only routes (Gatsby will not 
generate static versions for the pages/components inside the router)

For example: login, signup, cart, profile, and others will go here.
*/
const App = () => {
  return (
    <Router>
      <CartPage path="app/cart"/>
    </Router>
  )
}

export default App
