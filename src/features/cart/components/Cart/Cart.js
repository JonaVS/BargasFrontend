import React, { useState, useContext } from "react"
import { CartContext } from "../../../../context/CartContext"
import Container from "react-bootstrap/Container"
import NoContentMessage from "../../../../shared/components/NoContentMessage/NoContentMessage"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import CartDivider from "../CartDivider/CartDivider"
import CartActions from "../CartActions/CartActions"
import EditProductModal from "../EditProductModal/EditProductModal"
import ClientInfoForm from "../../../ordering/components/ClientInfoForm/ClientInfoForm"
import CartItemList from "../CartItemList/CartItemList"

const Cart = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState({})
  const { cart, deleteCartItem, sortCart } = useContext(CartContext)

  const handleModal = item => {
    setSelectedItem(item)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleSort = (order) => {
    sortCart(order)
  }

  return (
    <>
      <Container fluid>
        {cart.length === 0 || cart.length === undefined ? (
          <NoContentMessage
            message="Bolsa de pedido vacía"
            link="/menu"
            linkText="Ir al menú"
          />
        ) : (
          <Row xxl={2} xl={2} sm={2}>
            <Col sm={12} lg={6} className="p-0 me-0">
              <CartDivider text="Pedido" />
              <CartActions handleSort={handleSort} />
              <CartItemList
                cartItems={cart}
                handleEdit={handleModal}
                handleDelete={deleteCartItem}
              />
            </Col>
            <Col className="ps-xs-0 mt-5 mt-lg-0 ps-lg-5" sm={12} lg={6}>
              <CartDivider text="Datos de entrega" />
              <ClientInfoForm />
            </Col>
          </Row>
        )}
      </Container>
      <EditProductModal
        onHide={handleCloseModal}
        showModal={showModal}
        product={selectedItem}
      />
    </>
  )
}

export default Cart
