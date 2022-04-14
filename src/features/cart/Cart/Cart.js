import React, { useEffect, useState, useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import { cartSort } from "../../../helpers/cartSort"
import Container from "react-bootstrap/Container"
import EmptyCartMsg from "../EmptyCartMsg/EmptyCartMsg"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import CartDivider from "../Cart/CartDivider/CartDivider"
import CartActions from "../CartActions/CartActions"
import EditProductModal from "../EditProductModal/EditProductModal"
import ClientInfoForm from "../../ordering/components/ClientInfoForm/ClientInfoForm"
import CartItemList from "./CartItemList/CartItemList"

const Cart = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState({})
  const [order, setOrder] = useState("1")
  const { cart, setCart, deleteCartItem } = useContext(CartContext)
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 992px)" })

  useEffect(() => {
    if (cart.length > 0) {
      const defaultSortedCart = cartSort(cart, order)
      setCart(defaultSortedCart)
    }
  })

  const handleModal = item => {
    setSelectedItem(item)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  // const handleSelectedItem = e => {
  //   const id = e.target.getAttribute("cart-id")
  //   const item = cart.find(item => item.inCartId == id)
  //   setSelectedItem(item)
  //   setShowModal(true)
  // }

  const handleDelete = id => {
    let newCart = cart.filter(item => item.inCartId !== id)
    newCart = cartSort(newCart, order)
    setCart(newCart)
  }

  const handleSort = order => {
    const sortedCart = cartSort(cart, order)
    setOrder(order)
    setCart(sortedCart)
  }

  return (
    <>
      <Container fluid>
        {cart.length === 0 || cart.length === undefined ? (
          <EmptyCartMsg msg="Tu bolsa de pedido está vacia" />
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
            <Col className="ps-xs-0 mt-5 mt-lg-0 ps-lg-5"  sm={12} lg={6}>
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
        currentSort={order}
      />
    </>
  )
}

export default Cart
