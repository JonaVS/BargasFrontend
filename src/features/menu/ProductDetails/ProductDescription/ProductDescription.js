import React from "react"
import { GiTomato } from "react-icons/gi"
import { TbFileDescription } from "react-icons/tb"
import * as styles from "../ProductDescription/productDescription.module.css"

const ProductDescription = ({ data }) => {
  return (
    <div className={styles.descContainer}>
      <h2>
        <TbFileDescription />
        Descripción
      </h2>
      <p>{data.description}</p>
      <h2>
        <GiTomato />
        Ingredientes
      </h2>
      <p>{data.ingredients}</p>
    </div>
  )
}

export default ProductDescription
