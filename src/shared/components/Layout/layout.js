import "bootstrap/dist/css/bootstrap.min.css"
import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../context/UserContext"
import agent from "../../../API/agent"
import NavBar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { ToastContainer, Zoom } from "react-toastify"
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay"
import * as styles from "../Layout/layout.module.css"
// import Crisp from "../../../features/chat/components/Crisp/Crisp"

const Layout = ({ children }) => {
  const {setUser, setIsloggedIn} = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getLoggedInUser = async () => {
      try {
        const user = await agent.user.getLoggedInUser({
          withCredentials: true
        })
        setUser(user)
        setIsloggedIn(true)
        setIsLoading(false)
      } catch (err) {
        setIsLoading(false)
      }
    }
    getLoggedInUser()
  },[setUser, setIsloggedIn])

  return (
    <>
      <div className={styles.fixedBg}></div>
      <div className={styles.pageWrapper}>
        {isLoading ? (
          <LoadingOverlay />
        ) : (
          <main className={styles.main}>
            <NavBar />
            {children}
            <Footer />
            <ToastContainer position="bottom-center" transition={Zoom} />
            {/* <Crisp /> */}
          </main>
        )}
      </div>
    </>
  )
}

export default Layout
