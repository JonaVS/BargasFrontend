import React from "react"
import { Link } from "gatsby";
import { BsArrowRight } from "react-icons/bs";
import * as styles from "../CarouselCaption/carouselCaption.module.css"

const CarouselCaption = ({ item, description, url }) => {
  return (
    <div className={styles.caption}>
      <Link to={`${url}`}>
        {item}
        <BsArrowRight className={styles.icon} />
      </Link>
      <p>{description}</p>
    </div>
  )
}

export default CarouselCaption
