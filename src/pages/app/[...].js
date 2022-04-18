import React from "react"
import { Router } from "@reach/router"
import NotFoundPage from "../404"
import CartPage from "../../features/cart/pages/CartPage"
import SignUpPage from "../../features/auth/pages/SignUpPage"
import LoginPage from "../../features/auth/pages/LoginPage"
import PasswordRecoveryPage from "../../features/auth/pages/PasswordRecoveryPage"
import NotAuthenticatedRoute from "../../shared/components/PageRedirect/NotAuthenticatedRoute"

/*This special page handles client only routes (Gatsby will not 
generate static versions for the pages/components inside the router)

For example: login, signup, cart, profile, and others will go here.
*/
const App = () => {
  return (
    <Router>
      <CartPage path="app/cart"/>
      <NotAuthenticatedRoute path="app/login" component={LoginPage}/>
      <NotAuthenticatedRoute path="app/signup" component={SignUpPage}/>
      <NotAuthenticatedRoute path="app/forgot-password" component={PasswordRecoveryPage}/>
      <NotFoundPage default/>
    </Router>
  )
}

export default App
