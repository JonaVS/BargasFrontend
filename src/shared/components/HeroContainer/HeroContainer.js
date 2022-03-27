import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "./heroContainer.module.css"

const HeroContainer = ({ children, image }) => {
  return (
    <div className={styles.heroContainer}>
      <GatsbyImage image={image} className={styles.imgWrapper} alt="Menú heroImage" loading="eager" />
      {children}
    </div>
  )
}

export default HeroContainer
