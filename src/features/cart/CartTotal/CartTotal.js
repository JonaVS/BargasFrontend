import React from "react"
import Button from "react-bootstrap/Button"
import * as styles from "../CartTotal/cartTotal.module.css"

const CartTotal = ({ totalData }) => {
  return (
    <div className={styles.totalWrapper}>
      <div className={styles.totalHeader}>TOTAL DEL PEDIDO</div>
      <div className={styles.totalContent}>
        <p>Subtotal: ₡ {totalData.subTotal}</p>
        <p>Envio: ₡ {totalData.delivery}</p>
        <p>Descuento: ₡ {totalData.discount}</p>
        <div className={styles.basicDivider} />
        <p>TOTAL: ₡ {totalData.total + totalData.delivery}</p>
      </div>
      <Button size="lg" variant="custom" className={styles.orderBtn}>
        ORDENAR
      </Button>
    </div>
  )
}

CartTotal.defaultProps = {
   totalData: { subTotal: 0, delivery: 2000, discount: 0, total: 0 }
}

export default CartTotal
