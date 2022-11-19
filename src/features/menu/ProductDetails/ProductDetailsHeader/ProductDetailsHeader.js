import React from "react"
import FixedComponent from "../../../../shared/components/FixedComponent/FixedComponent"
import LinkBtn from "../../../../shared/components/LinkBtn/LinkBtn"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { Spinner } from "react-bootstrap"
import * as styles from "./productDetailsHeader.module.css"

const ProductDetailsHeader = ({name, loading}) => {
  return (
    <FixedComponent className={styles.fixedComponent}>
      <LinkBtn link="/menu" className={styles.menuLink}>
        <AiOutlineArrowLeft className={styles.icon} />
        Menú
      </LinkBtn>
      <h1 className={styles.detailsHeader}>
        {loading && (
          <Spinner animation="border"/>
        )}
        {name}
      </h1>
    </FixedComponent>
  )
}

ProductDetailsHeader.defaultProps = {
  name: 'Product name',
  loading: true
}

export default ProductDetailsHeader
