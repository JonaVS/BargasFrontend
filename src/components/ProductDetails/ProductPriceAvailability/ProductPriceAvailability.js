import React from "react"
import { Badge } from "react-bootstrap"
import * as styles from "../ProductPriceAvailability/productPriceAvailability.module.css"

const ProductPriceAvailability = ({ price, available }) => {
  return (
    <>
      {available && (
        <Badge bg="success" className="fw-lighter fs-5">
          <span className={styles.price}>
            ₡ {new Intl.NumberFormat("CRC").format(price)}
          </span>
        </Badge>
      )}
      <Badge
        bg={available ? "success" : "danger"}
        className="fw-lighter fs-5 ms-1"
      >
        <span className={styles.price}>
          {available ? "Disponible" : "No disponible"}
        </span>
      </Badge>
    </>
  )
}

ProductPriceAvailability.defaultProps = {
  price: new Intl.NumberFormat("CRC").format(5000),
  available: false,
}

export default ProductPriceAvailability
