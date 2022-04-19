import React from "react"
import { Button } from "react-bootstrap"
import * as styles from "../CategorieItem/categorieItem.module.css"

const CategorieItem = ({ name, handleCategorie, currentCategorie }) => {
  return (
    <li className={styles.listItem}>
      <Button
        value={name}
        onClick={e => handleCategorie(e)}
        variant="custom"
        className={`${
          currentCategorie === name ? styles.selectedCat : styles.catBtn
        }`}
      >
        {name}
      </Button>
    </li>
  )
}

CategorieItem.defaultProps = {
  name: "default",
  handleCategorie: () => {},
  currentCategorie: "",
}

export default CategorieItem
