import React, { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext"
import Offcanvas from "react-bootstrap/Offcanvas"
import CartCard from "../CartCard/CartCard"
import EditProductModal from "../EditProductModal/EditProductModal"
import { navigate } from "gatsby"
import { Button } from "react-bootstrap"
import NoContentMessage from "../../../shared/components/NoContentMessage/NoContentMessage"
import * as styles from "../SidePanelCart/sidePanelCart.module.css"

const SidePanelCart = ({ showCart, handleShowCart }) => {
  const { cart, deleteCartItem } = useContext(CartContext)
  const [showModal, setShowModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState({})

  const handleModal = item => {
    setSelectedItem(item)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const goToCart = () => {
    handleShowCart()
    navigate("/app/cart")
  }

  return (
    <>
      <Offcanvas
        className={`${styles.sideCart}`}
        show={showCart}
        onHide={handleShowCart}
        placement="end"
      >
        <Offcanvas.Header className={styles.header} closeButton>
          <Offcanvas.Title className={`${styles.title} display-6`}>
            Mi pedido
          </Offcanvas.Title>
        </Offcanvas.Header>
        <div className={styles.wrapper}>
          <Offcanvas.Body className="p-0">
            <div className={styles.contentWrapper}>
              {cart.length === 0 || cart.length === undefined ? (
                <NoContentMessage
                  message="Bolsa de pedido vacía"
                  link="/menu"
                  linkText="Ir al menú"
                  linkCallback={handleShowCart}
                  messageClass={styles.msgContainer}
                />
              ) : (
                cart.map(item => (
                  <CartCard
                    key={item.inCartId}
                    product={item}
                    handleEdit={handleModal}
                    handleDelete={deleteCartItem}
                  />
                ))
              )}
            </div>
          </Offcanvas.Body>
          {cart.length !== 0 && (
            <div className={styles.btnWrapper}>
              <Button
                bsPrefix="cartBtn"
                onClick={goToCart}
                className={styles.cartBtn}
              >
                ORDENAR
              </Button>
            </div>
          )}
        </div>
      </Offcanvas>
      <EditProductModal
        onHide={handleCloseModal}
        showModal={showModal}
        product={selectedItem}
        currentSort={1}
      />
    </>
  )
}

export default SidePanelCart
