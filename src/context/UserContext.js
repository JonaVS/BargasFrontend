import React, { createContext, useState } from "react"
import agent from "../API/agent"
import { navigate } from "gatsby"
import { toastDispatcher, ToastType } from "../helpers/toastDispatcher"
import { errorMessageBuilder, ErrorContext} from "../helpers/errorMessageBuilder"

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = async userCredentials => {
    try {
      const response = await agent.user.login(
        {
          identifier: userCredentials.email,
          password: userCredentials.password,
        },
        { withCredentials: true }
      )
      setUser(response.user)
      navigate("/")
    } catch (error) {
      toastDispatcher(
        ToastType.ERROR,
        errorMessageBuilder(ErrorContext.LOGIN, error)
      )
    }
  }

  const logout = async () => {
    await agent.user.logout({}, { withCredentials: true })
    setUser(null)
    navigate("/")
  }

  const register = async userCredential => {
    try {
      const response = await agent.user.register(
        {
          username: userCredential.username,
          email: userCredential.email,
          password: userCredential.password,
        },
        { withCredentials: true }
      )
      setUser(response.user)
      navigate("/")
    } catch (error) {
      toastDispatcher(
        ToastType.ERROR,
        errorMessageBuilder(ErrorContext.SIGNUP, error)
      )
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        register,
        login,
        logout,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

