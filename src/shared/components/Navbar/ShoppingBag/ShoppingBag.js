import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../../context/CartContext"
import { BsBag } from "react-icons/bs"
import * as styles from "../ShoppingBag/shoppingBag.module.css"

const ShoppingBag = ({handleShowCart}) => {

  const {cart} = useContext(CartContext)
  const [itemCount, setItemCount] = useState(0)

  useEffect(() => {
    let itemCount = 0
    cart.forEach(item => (itemCount += parseInt(item.quantity)))
    setItemCount(itemCount)
  }, [cart])

  return (
    <button
      title="Open cart"
      type="button"
      onClick={handleShowCart}
      className={styles.cartLink}
    >
      <div className={styles.bagWrapper}>
        <div className={styles.counter}>{itemCount}</div>
        <BsBag className={styles.bagIcon} />
      </div>
    </button>
  )
}

ShoppingBag.defaultProps = {
  handleShowCart: () => console.log('Default btn message')
}

export default ShoppingBag



// return (
//   <Link to="/cart" className={styles.cartLink}>
//     <div className={styles.bagWrapper}>
//       <div className={styles.counter}>{itemCount}</div>
//       <BsBag className={styles.bagIcon} />
//     </div>
//   </Link>
// )