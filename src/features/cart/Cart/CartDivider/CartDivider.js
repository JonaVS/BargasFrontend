import React from "react"
import *as styles from '../CartDivider/CartDivider.module.css'

const CartDivider = ({text}) => {
  return (
    <>
      <h2 className={styles.text}>{text}</h2>
      <hr className={styles.cartDivider} />
    </>
  )
}

CartDivider.defaultProps = {
    text: 'Default text'
}

export default CartDivider
