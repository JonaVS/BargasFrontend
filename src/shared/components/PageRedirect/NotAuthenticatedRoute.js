import React, { useContext } from "react"
import { UserContext } from "../../../context/UserContext"
import { navigate } from "gatsby"

const NotAuthenticatedRoute = ({component: Component}) => {
  const { user } = useContext(UserContext) 
  if (user) {
    navigate('/')
    return <div style={{width: '100%', height:'100vh'}}></div>
  }
  return <Component/>
}

export default NotAuthenticatedRoute
