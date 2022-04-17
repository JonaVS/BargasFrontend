import React from "react"
import Button from "react-bootstrap/Button"
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi"
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
        <div ref={itemToScroll} className={styles.scrollingWrapper}>
          {categories.map(item => {
            return (
              <Button
                key={item.strapi_id}
                value={item.name}
                onClick={e => handleCategorie(e)}
                variant="custom"
                className={`${currentCategorie === item.name ? styles.selectedBtn : styles.catBtn}`}
              >
                {item.name}
              </Button>
            )
          })}
        </div>
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
