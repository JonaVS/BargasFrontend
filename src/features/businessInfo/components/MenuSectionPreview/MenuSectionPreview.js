import React from "react"
import Masonry from "react-masonry-css"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "./menuSectionPreview.module.css"

//START--Framer motion variants--START
const wrapper = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1.2,
      staggerChildren: 0.3,
    },
  },
}

const previewItem = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: {duration: 0.9} }
}
//END--Framer motion variants--END

const breakPoints = {
  default: 2,
}

const MenuSectionPreview = ({ menuPreview }) => {
  return (
    <motion.div
      className={styles.masonryWrapper}
      variants={wrapper}
      initial="hidden"
      whileInView="show"
      viewport={{ fallback: true, once: true }}
    >
      <Masonry
        breakpointCols={breakPoints}
        className={styles.masonryGrid}
        columnClassName={styles.masonryCol}
      >
        {menuPreview.map(item => {
          return (
            <motion.div key={item.product.name} variants={previewItem}>
              <Link to={`/menu/${item.product.slug}`}>
                <GatsbyImage
                  image={item.image.localFile.childImageSharp.gatsbyImageData}
                  alt={item.product.name}
                />
              </Link>
            </motion.div>
          )
        })}
      </Masonry>
    </motion.div>
  )
}

export default MenuSectionPreview
