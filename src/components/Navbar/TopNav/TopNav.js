import React from "react"
import { FiInstagram, FiFacebook } from "react-icons/fi"
import ShoppingBag from "../ShoppingBag/ShoppingBag"
import * as styles from "../TopNav/topNav.module.css"

const TopNav = ({handleShowCart}) => {
  return (
    <>
      <div className={styles.topNavWrapper}>
        <div className={styles.topLeft}>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FiInstagram className={styles.icon} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FiFacebook className={styles.icon} />
          </a>
        </div>
        <ShoppingBag handleShowCart={handleShowCart} />
      </div>
    </>
  )
}

export default TopNav
