import React from "react"
import NavBar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { ToastContainer, Zoom } from "react-toastify"
import * as styles from "../Layout/layout.module.css"
// import Crisp from "./Crisp/Crisp"

const Layout = ({ children }) => {
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
