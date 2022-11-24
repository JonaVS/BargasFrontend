import React from "react"
import { motion } from "framer-motion"
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi"
import CategorieList from "./CategorieList/CategorieList"
import * as styles from "../Categories/categories.module.css"

//START--Framer motion variants--START
const categoryHandler = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
}

const scrollBtn = {
  tap: { scale: 0.9 } 
}
//END--Framer motion variants--END

const Categories = ({ categories, handleCategorie, currentCategorie }) => {
  const itemToScroll = React.useRef()

  function handleScroll(direction) {
    let scrollLeftValue = itemToScroll.current.scrollLeft
    if (direction === "left") {
      scrollLeftValue -= 200
      itemToScroll.current.scrollTo({
        left: scrollLeftValue,
        behavior: "smooth",
      })
    } else {
      scrollLeftValue += 200
      itemToScroll.current.scrollTo({
        left: scrollLeftValue,
        behavior: "smooth",
      })
    }
  }

  return (
    <motion.div
      variants={categoryHandler}
      initial="hidden"
      whileInView="show"
      viewport={{ fallback: true, once: true, amount: 1 }}
      id='menuCategories'
    >
      <h1 className={styles.title}>Categorias</h1>
      <div className={styles.mainCont}>
        <motion.button
          onClick={() => handleScroll("left")}
          whileTap='tap'
          variants={scrollBtn}
          className={styles.controlBtn}
        >
          <FiArrowLeftCircle className={styles.icon} />
        </motion.button>
        <CategorieList
          ref={itemToScroll}
          categories={categories}
          handleCategorie={handleCategorie}
          currentCategorie={currentCategorie}
        />
        <motion.button
          onClick={() => handleScroll("right")}
          whileTap='tap'
          variants={scrollBtn}
          className={styles.controlBtn}
        >
          <FiArrowRightCircle className={styles.icon} />
        </motion.button>
      </div>
    </motion.div>
  )
}

Categories.defaultProps = {
  categorias: [],
  handleCategorie: () => {},
}

export default Categories
