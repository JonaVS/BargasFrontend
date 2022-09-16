import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Menu from "./Menu"
import *as styles from './menu.module.css'

const QRMenu = () => {
  return (
    <>
      <StaticImage
        src="../../../images/logoB.png"
        alt="Bargas Logo"
        className={styles.qrlogo}
        placeholder="blurred"
        width={300}
        quality={100}
      />
      <Menu qrmenu />
    </>
  )
}

export default QRMenu
