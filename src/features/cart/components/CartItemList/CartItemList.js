import React from "react"
import CartCard from "../CartCard/CartCard"
import * as styles from "./cartItemList.module.css"

const CartItemList = ({
  cartItems,
  handleEdit,
  handleDelete,
  wrapperClass,
}) => {
  return (
    <div className={`${styles.cartListWrapper} ${wrapperClass}`}>
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
  wrapperClass: ''
}

export default CartItemList
