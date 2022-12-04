import "bootstrap/dist/css/bootstrap.min.css"
import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../context/UserContext"
import agent from "../../../API/agent"
import NavBar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { ToastContainer, Zoom } from "react-toastify"
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay"
// import Crisp from "../../../features/chat/components/Crisp/Crisp"
import ScrollToTop from "../ScrollToTop/ScrollToTop"
import * as styles from "../Layout/layout.module.css"

const Layout = ({ children }) => {
  const {setUser} = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getLoggedInUser = async () => {
      try {
        const user = await agent.user.getLoggedInUser({
          withCredentials: true
        })
        setUser(user)
      } catch (err) {}
      setIsLoading(false)
    }
    getLoggedInUser()
  },[setUser])

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
            <ScrollToTop/>
          </main>
        )}
      </div>
    </>
  )
}

export default Layout
