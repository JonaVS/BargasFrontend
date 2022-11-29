import React from "react"
import { motion } from "framer-motion"
import * as styles from "./sectionDescriptor.module.css"

//START--Framer motion variants--START
const descriptor = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}
//END--Framer motion variants--END

const SectionDescriptor = ({ title, text, className }) => {
  return (
    <motion.div
      variants={descriptor}
      initial="hidden"
      animate="show"
      className={`${styles.sectionDesc} ${className}`}
    >
      <h1>{title}</h1>
      <p>{text}</p>
    </motion.div>
  )
}

SectionDescriptor.defaultProps = {
  tittle: 'A tittle',
  text: 'Descriptor Text',
  className: ''
}

export default SectionDescriptor
