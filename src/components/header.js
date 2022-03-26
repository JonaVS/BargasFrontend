import React, { useState, useContext, useEffect } from "react"
import { CartContext } from "../../context/CartContext"
import { Table } from "react-bootstrap"
import FadeRow from "../FadeRow/FadeRow"
import CartTotal from "../CartTotal/CartTotal"
import EditProductModal from "../EditProductModal/EditProductModal"
import * as styles from "../Cart/cart.module.css"

const Header = () => {
  const [showModal, setShowModal] = useState(false)
  const [cartTotal, setCartTotal] = useState(0)
  const [selectedItem, setSelectedItem] = useState({})
  const [cart, setCart] = useContext(CartContext)

  useEffect(() => {
    if (cart.length > 0) {
      getCartTotal()
    } else {
    }
  }, [cart])

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
    const newCart = cart.filter(item => item.inCartId !== id)
    setCart(newCart)
  }

  const getCartTotal = () => {
    let subTotal = 0
    // let delivery = 2000
    // let discount = 0.5

    //The total for products only
    cart.forEach(item => (subTotal += parseInt(item.price) * item.quantity))

    //This applies the delivery cost
    // subTotal += delivery

    //Set the cartTotal state
    setCartTotal(subTotal)
  }

  return (
    <>
      <Table responsive borderless={true} hover className={`${styles.cart}`}>
        <thead>
          <tr>
            <th> </th>
            <th> </th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart == null
            ? null
            : cart.map(item => (
                <FadeRow
                  key={item.inCartId}
                  item={item}
                  handleDelete={handleDelete}
                  handleEdit={handleModal}
                />
              ))}
        </tbody>
      </Table>
      <CartTotal
        totalData={{
          subTotal: cartTotal,
          delivery: 2000,
          discount: 0,
          total: cartTotal,
        }}
      />
      <EditProductModal
        onHide={handleCloseModal}
        showModal={showModal}
        product={selectedItem}
      />
    </>
  )
}

export default Header
