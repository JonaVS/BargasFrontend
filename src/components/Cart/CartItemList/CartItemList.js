import React from "react"
import CartCard from "../../CartCard/CartCard"
import *as styles from '../CartItemList/cartItemList.module.css'

const CartItemList = ({ cartItems, handleEdit, handleDelete }) => {
  return (
    <div className={styles.cartListWrapper}>
      {cartItems.map(item => (
        <CartCard
          key={item.inCartId}
          product={item}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  )
}

CartItemList.defaultProps = {
  cartItems: [],
  handleEdit: () => {},
  handleDelete: () => {},
}

export default CartItemList
