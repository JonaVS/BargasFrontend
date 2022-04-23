import React, { useContext } from "react"
import { CartContext } from "../../../../context/CartContext"
import Dropdown from "react-bootstrap/Dropdown"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { BsFilterRight } from "react-icons/bs"
import { SortBy } from "../../../../helpers/cartSort"
import * as styles from "../CartActions/cartActions.module.css"

const CartActions = () => {
  const { sortCart } = useContext(CartContext)

  const handleFilterKey = (key) => {
     sortCart(key)
  }

  return (
    <div className={styles.actions}>
      <Dropdown onSelect={handleFilterKey} as={ButtonGroup}>
        <Dropdown.Toggle className={styles.sortDp}>
          Ordenar
          <BsFilterRight className={styles.icon}/>
        </Dropdown.Toggle>
        <Dropdown.Menu className={styles.dpMenu}>
          <Dropdown.Item eventKey={SortBy.SUBTOTAL}>Subtotal</Dropdown.Item>
          <Dropdown.Item eventKey={SortBy.PRICE}>Precio</Dropdown.Item>
          <Dropdown.Item eventKey={SortBy.QUANTITY}>Cantidad</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default CartActions
