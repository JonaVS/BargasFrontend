import React from "react"
import Dropdown from "react-bootstrap/Dropdown"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { BsFilterRight } from "react-icons/bs"
import { SortBy } from "../../../../helpers/cartSort"
import * as styles from "../CartActions/cartActions.module.css"

const CartActions = ({handleSort}) => {

  const handleFilterKey = (key) => {
     handleSort(key)
  }
  return (
    <div className={styles.actions}>
      <Dropdown onSelect={handleFilterKey} as={ButtonGroup}>
        <Dropdown.Toggle className={styles.sortDp} id="dropdown-custom-1">
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

CartActions.defaultProps = {
  handleFilterKey: () => {}
}

export default CartActions
