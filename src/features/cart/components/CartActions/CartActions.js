import React, { useContext, useState } from "react"
import { CartContext } from "../../../../context/CartContext"
import Dropdown from "react-bootstrap/Dropdown"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { BsFilterRight, BsTrash } from "react-icons/bs"
import { SortBy } from "../../../../helpers/cartSort"
import { Button } from "react-bootstrap"
import ConfirmationModal from "../../../../shared/components/ConfirmationModal/ConfirmationModal"
import * as styles from "../CartActions/cartActions.module.css"

const CartActions = () => {
  const { sortCart, setCart } = useContext(CartContext)
  const [showConfirmModal, setShowConfirmModal] = useState(false)

  const handleFilterKey = (key) => {
     sortCart(key)
  }

  const handleDelete = () => {
    setShowConfirmModal(false)
    setCart([])
  }

  const handleConfirmModal = () => {
    setShowConfirmModal(!showConfirmModal)
  }

  return (
    <div className={styles.actions}>
      <Dropdown onSelect={handleFilterKey} as={ButtonGroup}>
        <Dropdown.Toggle className={styles.sortDp}>
          Ordenar
          <BsFilterRight className={styles.icon} />
        </Dropdown.Toggle>
        <Dropdown.Menu className={styles.dpMenu}>
          <Dropdown.Item eventKey={SortBy.SUBTOTAL}>Subtotal</Dropdown.Item>
          <Dropdown.Item eventKey={SortBy.PRICE}>Precio</Dropdown.Item>
          <Dropdown.Item eventKey={SortBy.QUANTITY}>Cantidad</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button
        variant="custom"
        className={styles.emptyCartBtn}
        onClick={handleConfirmModal}
      >
        Eliminar todo <BsTrash />
      </Button>
      <ConfirmationModal
        show={showConfirmModal}
        close={handleConfirmModal}
        action={handleDelete}
        contextTitle="Eliminar items"
        actionText="Eliminar"
        message="¿Deseas eliminar todos los items?"
      />
    </div>
  )
}

export default CartActions
