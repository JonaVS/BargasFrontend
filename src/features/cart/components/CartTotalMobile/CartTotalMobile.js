import React, { useContext } from "react"
import { CartContext } from "../../../../context/CartContext"
import Button from "react-bootstrap/Button"
import * as styles from "../CartTotalMobile/cartTotalMobile.module.css"

const CartTotalMobile = ({ totalData, focusErrors }) => {
  const { cartTotal } = useContext(CartContext)
  return (
    <div className={styles.totalWrapper}>
      <div className={styles.dataWrapper}>
        <p>Subtotal: ₡ {cartTotal}</p>
        <p>Envio: ₡ {totalData.delivery}</p>
        <div className={styles.basicDivider} />
        <p>TOTAL: ₡ {cartTotal + totalData.delivery}</p>
      </div>
      <Button
        size="lg"
        variant="custom"
        type="submit"
        className={styles.orderBtn}
        onClick={focusErrors}
      >
        ORDENAR
      </Button>
    </div>
  )
}

CartTotalMobile.defaultProps = {
  totalData: { subTotal: 0, delivery: 2000, discount: 0, total: 0 },
}

export default CartTotalMobile
