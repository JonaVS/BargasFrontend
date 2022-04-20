import React, { useContext, useState } from "react"
import { CartContext } from "../../../../context/CartContext"
import Offcanvas from "react-bootstrap/Offcanvas"
import EditProductModal from "../EditProductModal/EditProductModal"
import NoContentMessage from "../../../../shared/components/NoContentMessage/NoContentMessage"
import LinkBtn from "../../../../shared/components/LinkBtn/LinkBtn"
import CartItemList from "../CartItemList/CartItemList"
import * as styles from "./sidePanelCart.module.css"


const SidePanelCart = ({ showCart, handleShowCart }) => {
  const { cart, deleteCartItem, cartTotal} = useContext(CartContext)
  const [showModal, setShowModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState({})

  const handleEditModal = item => {
    setSelectedItem(item)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
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
                <CartItemList
                  cartItems={cart}
                  handleEdit={handleEditModal}
                  handleDelete={deleteCartItem}
                />
              )}
            </div>
          </Offcanvas.Body>
          {cart.length !== 0 && (
            <div className={styles.btnWrapper}>
              <LinkBtn
                link="/app/cart"
                callback={handleShowCart}
                className={styles.cartBtn}
              >
                ORDENAR {`(₡${cartTotal})`}
              </LinkBtn>
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
