import React from "react"
import Masonry from "react-masonry-css"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "./menuSectionPreview.module.css"

const breakPoints = {
  default: 2,
}

const MenuSectionPreview = ({ menuPreview }) => {
  return (
    <div className={styles.masonryWrapper}>
      <Masonry
        breakpointCols={breakPoints}
        className={styles.masonryGrid}
        columnClassName={styles.masonryCol}
      >
        {menuPreview.map(item => {
          return (
            <GatsbyImage
              key={item.product.name}
              image={item.image.localFile.childImageSharp.gatsbyImageData}
              alt={item.product.name}
            />
          )
        })}
      </Masonry>
    </div>
  )
}

export default MenuSectionPreview
