import "bootstrap/dist/css/bootstrap.min.css"
import React, { useContext, useLayoutEffect } from "react"
import { UserContext } from "../../../context/UserContext"
import agent from "../../../API/agent"
import NavBar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { ToastContainer, Zoom } from "react-toastify"
import * as styles from "../Layout/layout.module.css"
// import Crisp from "../../../features/chat/components/Crisp/Crisp"

const Layout = ({ children }) => {
  const {setUser, setIsloggedIn} = useContext(UserContext)

  useLayoutEffect(() => {
    const getLoggedInUser = async () => {
      try {
        const user = await agent.user.getLoggedInUser({
          withCredentials: true
        })
        setUser(user)
        setIsloggedIn(true)
      } catch (err) {
        console.log(err) // Pending toast notification
      }
    }
    getLoggedInUser()
  },[setUser, setIsloggedIn])

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
