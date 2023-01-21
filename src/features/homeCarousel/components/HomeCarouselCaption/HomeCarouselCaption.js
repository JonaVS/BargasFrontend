import React from "react"
import { Link } from "gatsby";
import { BsArrowRight } from "react-icons/bs";
import * as styles from "./homeCarouselCaption.module.css"

const HomeCarouselCaption = ({ item, description, url }) => {
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

export default HomeCarouselCaption
