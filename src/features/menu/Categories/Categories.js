import React from "react"
import Button from "react-bootstrap/Button"
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi"
import CategorieList from "./CategorieList/CategorieList"
import * as styles from "../Categories/categories.module.css"

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
    <>
      <h1 className={styles.title}>Categorias</h1>
      <div className={styles.mainCont}>
        <Button
          onClick={() => handleScroll("left")}
          variant="default"
          className={`shadow-none ${styles.controlBtn}`}
        >
          <FiArrowLeftCircle className={styles.icon} />
        </Button>
        <CategorieList
          ref={itemToScroll}
          categories={categories}
          handleCategorie={handleCategorie}
          currentCategorie={currentCategorie}
        />
        <Button
          onClick={() => handleScroll("right")}
          variant="default"
          className={`shadow-none ${styles.controlBtn}`}
        >
          <FiArrowRightCircle className={styles.icon} />
        </Button>
      </div>
    </>
  )
}

Categories.defaultProps = {
  categorias: [],
  handleCategorie: () => {},
}

export default Categories
