import React, { useContext } from "react"
import { UserContext } from "../../../context/UserContext"
import { navigate } from "gatsby"

const AuthenticatedRoute = ({component: Component, location}) => {
  const {user} = useContext(UserContext) 
  if (!user && location.pathname !== `/app/login`) {
    navigate('/app/login')
    return <div style={{width: '100%', height:'100vh'}}></div>
  }
  return <Component/>
}

export default AuthenticatedRoute
