import React from "react"
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./locationPin.module.css"

//START--Framer motion variants--START
const pin = {
  show: {
    scale: [1, 0.90],
    transition: {
      duration: 1.1,
      repeat: Infinity,
      repeatType: "reverse",
      type: 'spring'
    },
  },
}
//END--Framer motion variants--END

const LocationPin = () => (
  <div className={styles.pinWrapper}>
    <motion.div variants={pin} animate="show" className={styles.imgHolder}>
      <StaticImage
        src="../../../../images/logoB.png"
        alt="business pin"
        placeholder="blurred"
        width={40}
        quality={100}
      />
    </motion.div>
  </div>
)

export default LocationPin
