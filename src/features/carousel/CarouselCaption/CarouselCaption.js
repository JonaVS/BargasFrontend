import React from "react"
import { AiOutlineEye } from "react-icons/ai"
import * as styles from "../CarouselCaption/carouselCaption.module.css"

const CarouselCaption = ({ text, title }) => {
  return (
    <div className={styles.caption}>
      <h3>
        {title}
        <AiOutlineEye className={styles.icon} />
      </h3>
      <p>{text}</p>
    </div>
  )
}

export default CarouselCaption
