import React, { useContext } from "react"
import { CartContext } from "../../../../context/CartContext"
import { BsBag } from "react-icons/bs"
import * as styles from "../ShoppingBag/shoppingBag.module.css"

const ShoppingBag = ({handleShowCart}) => {

  const {itemCount} = useContext(CartContext)

  return (
    <button
      title="Open cart"
      type="button"
      onClick={handleShowCart}
      className={styles.cartBtn}
    >
      <div className={styles.bagWrapper}>
        <div className={styles.counter}>{itemCount}</div>
        <BsBag className={styles.bagIcon} />
      </div>
    </button>
  )
}

ShoppingBag.defaultProps = {
  handleShowCart: () => {}
}

export default ShoppingBag