import React from "react"
import CatergorieItem from "../CategorieItem/CategorieItem"
import * as styles from "./categorieList.module.css"

const CategorieList = React.forwardRef(
  ({ categories, handleCategorie, currentCategorie }, ref) => (
    <div ref={ref} className={styles.scrollingWrapper}>
      <ul className={styles.categorieList}>
        {categories.map(item => (
          <CatergorieItem
            key={item.strapi_id}
            name={item.name}
            handleCategorie={handleCategorie}
            currentCategorie={currentCategorie}
          />
        ))}
      </ul>
    </div>
  )
)

CategorieList.defaultProps = {
  categories: [],
  handleCategorie: () => {},
  currentCategorie: "",
}

export default CategorieList
