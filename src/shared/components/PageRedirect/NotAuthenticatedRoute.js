import React, { useContext } from "react"
import { UserContext } from "../../../context/UserContext"
import { navigate } from "gatsby"

const NotAuthenticatedRoute = ({component: Component}) => {
  const {isLoggedIn} = useContext(UserContext) 
  if (isLoggedIn) {
    navigate('/')
    return null
  }
  return <Component/>
}

export default NotAuthenticatedRoute
