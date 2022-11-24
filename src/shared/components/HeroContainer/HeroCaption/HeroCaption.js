import React from "react"
import { motion } from "framer-motion"
import { BiFoodMenu } from "react-icons/bi"
import Button from "../../Button/Button"
import * as styles from "./heroCaption.module.css"

//START--Framer motion variants--START
const caption = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.0,
      delay: 0.3,
    },
  },
}
//END--Framer motion variants--END

const HeroCaption = ({ title, text, btnText, icon }) => {
  return (
    <motion.div
      className={styles.heroCaption}
      variants={caption}
      initial="hidden"
      animate="show"
    >
      <h1>
        {title}
        <div className={styles.roundedWrapper}>{icon}</div>
      </h1>
      <div className={styles.basicDivider} />
      {text && <p>{text}</p>}
      {btnText && <Button variant='dark' className={styles.btn}>{btnText}</Button>}
    </motion.div>
  )
}

HeroCaption.defaultProps = {
  title: "Default Tittle",
  text: null,
  btnText: null,
  icon: <BiFoodMenu />,
}

export default HeroCaption
