import React from "react"
import { Router } from "@reach/router"
import CartPage from "../../features/cart/pages/CartPage"
import QRMenu from "../../features/menu/Menu/QRMenu"
import OrderingResult from "../../features/ordering/pages/OrderingResult"
import NotAuthenticatedRoute from "../../shared/components/PageRedirect/NotAuthenticatedRoute"
import LoginPage from "../../features/auth/pages/LoginPage"
import SignUpPage from "../../features/auth/pages/SignUpPage"
import PasswordRecoveryPage from "../../features/auth/pages/PasswordRecoveryPage"
import ResetPasswordPage from "../../features/auth/pages/ResetPasswordPage"
import AuthenticatedRoute from "../../shared/components/PageRedirect/AuthenticatedRoute"
import UserAccountPage from "../../features/userAccount/pages/userAccountPage"
import NotFoundPage from "../404"

/*This special page handles client only routes (Gatsby will not 
generate static versions for the pages/components inside the router)

For example: login, signup, cart, profile, and others will go here.
*/
const App = () => {
  return (
    <Router>
      <CartPage path="app/cart"/>
      <QRMenu path="app/QRmenu"/>
      <OrderingResult path="app/ordering-result/:resultType"/>
      <NotAuthenticatedRoute path="app/login" component={LoginPage}/>
      <NotAuthenticatedRoute path="app/signup" component={SignUpPage}/>
      <NotAuthenticatedRoute path="app/forgot-password" component={PasswordRecoveryPage}/>
      <NotAuthenticatedRoute path="app/reset-password" component={ResetPasswordPage}/>
      <AuthenticatedRoute path="app/user-account" component={UserAccountPage}/>
      <NotFoundPage default/>
    </Router>
  )
}

export default App
