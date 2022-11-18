import React from "react"
import { motion } from "framer-motion"
import * as styles from "./userAccountModule.module.css"

const module = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
    },
  },
}

const UserAccountModule = ({ children }) => {
  return (
    <motion.div
      variants={module}
      initial="hidden"
      animate="show"
      className={styles.accountModule}
    >
      {children}
    </motion.div>
  )
}

export default UserAccountModule
