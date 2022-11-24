import React from "react"
import { motion } from "framer-motion"
import * as styles from "./button.module.css"

//START--Framer motion variants--START
const baseAnimationValues = {
  transition: { duration: 0.4, type: "spring" },
}

const btn = {
  mainHover: {
    backgroundColor: "rgb(233, 198, 44)",
    ...baseAnimationValues,
  },
  darkHover: {
    backgroundColor: "rgb(8, 8, 8)",
    ...baseAnimationValues,
  },
  tap: {
    scale: 0.95,
    ...baseAnimationValues,
  },
}
//END--Framer motion variants--END

export const ButtonType = {
  Main: "main",
  Dark: "dark",
}

export const ButtonTypeAnimation = {
  MainHover: "mainHover",
  DarkHover: "darkHover",
  Tap: "tap",
}

const Button = ({ variant, children, onClick, className, ...props }) => {
  const baseCssClass = styles[variant]

  return (
    <motion.button
      variants={btn}
      whileTap={ButtonTypeAnimation.Tap}
      whileHover={ButtonTypeAnimation.Tap}
      className={`${baseCssClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  )
}

Button.defaultProps = {
  variant: "main",
  className: "",
  onClick: () => {},
}

export default Button
