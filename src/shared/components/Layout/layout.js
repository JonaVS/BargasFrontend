import React, { useContext, useEffect } from "react"
import agent from "../../../API/agent"
import NavBar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { ToastContainer, Zoom } from "react-toastify"
import * as styles from "../Layout/layout.module.css"
import { UserContext } from "../../../context/UserContext"
// import Crisp from "../../../features/chat/components/Crisp/Crisp"

const Layout = ({ children }) => {
  const {setUser, setIsloggedIn} = useContext(UserContext)

  useEffect(() => {
    const getLoggedInUser = async () => {
      const token = window.localStorage.getItem("bargasJwt")
      if (!token) return
      try {
        const user = await agent.user.getLoggedInUser({
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setUser(user)
        setIsloggedIn(true)
      } catch (err) {
        window.localStorage.removeItem("bargasJwt")
      }
    }
    getLoggedInUser()
  },[setUser])

  return (
    <>
      <div className={styles.fixedBg}></div>
      <div className={styles.pageWrapper}>
        <main className={styles.main}>
          <NavBar />
          {children}
          <Footer />
          <ToastContainer position="bottom-right" transition={Zoom} />
          {/* <Crisp /> */}
        </main>
      </div>
    </>
  )
}

export default Layout
