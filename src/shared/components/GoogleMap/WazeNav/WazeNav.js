import React from "react"
import { motion } from "framer-motion"
import { FaWaze } from "react-icons/fa"
import * as styles from "./wazeNav.module.css"

//START--Framer motion variants--START
const wazeNav = {
  initial: { color: "var(--bargas-muted-text1)" },
  hoverTap: {
    color: "rgb(226, 226, 226)",
    scale: 0.95,
    transition: { duration: 0.2 },
  },
}
//END--Framer motion variants--END

/*
  The link will open respective apps. 
  For example:
  1. IOS user taps the link, 
  2. Waze app will open if installed, otherwise, the App store will open to get the Waze app.
*/ 
const WazeNav = ({ location, zoom }) => {
  const wazeDeepLink = `https://www.waze.com/ul?ll=${location.wazeLat}${location.wazeLng}&navigate=yes&zoom=${zoom}`
  return (
    <motion.a
      variants={wazeNav}
      initial="initial"
      whileHover='hoverTap'
      whileTap='hoverTap'
      className={styles.wazeLink}
      href={wazeDeepLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      Abrir con Waze
      <FaWaze size={30} />
    </motion.a>
  )
}

WazeNav.defaultProps = {
  location: {
    wazeLat: "25.76605560%2C",
    wazeLng: "-80.19346700",
  },
  zoom: 17,
}

export default WazeNav
