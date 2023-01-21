import React, { useState, useContext } from "react"
import { CartContext } from "../../../../context/CartContext"
import Container from "react-bootstrap/Container"
import NoContentMessage from "../../../../shared/components/NoContentMessage/NoContentMessage"
import {Row, Col} from "react-bootstrap"
import { motion } from "framer-motion"
import CartDivider from "../CartDivider/CartDivider"
import CartActions from "../CartActions/CartActions"
import EditProductModal from "../EditProductModal/EditProductModal"
import ClientInfoForm from "../../../ordering/components/ClientInfoForm/ClientInfoForm"
import CartItemList from "../CartItemList/CartItemList"

//START--Framer motion variants--START
const orderPanel = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const formPanel = {
  ...orderPanel,
  show: {
    ...orderPanel.show,
    transition: {
      duration: 0.5,
      delay: 0.6
    },
  },
}
//END--Framer motion variants--END

const Cart = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState({})
  const { cart, deleteCartItem } = useContext(CartContext)

  const handleModal = item => {
    setSelectedItem(item)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
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
            <Col
              as={motion.div}
              variants={orderPanel}
              initial="hidden"
              whileInView="show"
              viewport={{ fallback: true, once: true, amount: 0.3 }}
              sm={12}
              lg={6}
              className="p-0 me-0"
            >
              <CartDivider text="Pedido" />
              <CartActions />
              <CartItemList
                cartItems={cart}
                handleEdit={handleModal}
                handleDelete={deleteCartItem}
              />
            </Col>
            <Col
              as={motion.div}
              variants={formPanel}
              initial="hidden"
              animate="show"
              className="ps-xs-0 mt-5 mt-lg-0 ps-lg-5 position-relative"
              style={{ zIndex: 1 }}
              sm={12}
              lg={6}
            >
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
