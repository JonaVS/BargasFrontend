import React from "react"
import { Button } from "react-bootstrap"
import * as styles from "../CategorieItem/categorieItem.module.css"

const CategorieItem = ({ name, handleCategorie, currentCategorie }) => {
  return (
    <li className={styles.listItem}>
      <button
        value={name}
        onClick={e => handleCategorie(e)}
        className={`${
          currentCategorie === name ? styles.selectedCat : styles.catBtn
        }`}
      >
        {name}
      </button>
    </li>
  )
}

CategorieItem.defaultProps = {
  name: "default",
  handleCategorie: () => {},
  currentCategorie: "",
}

export default CategorieItem
