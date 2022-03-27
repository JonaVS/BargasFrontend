import React from "react"
import Container from 'react-bootstrap/Container'
import SectionHeader from "../shared/components/SectionHeader/SectionHeader"
import SectionDescriptor from "../shared/components/SectionDescriptor/SectionDescriptor"
import Cart from "../features/cart/Cart/Cart"
import Divider from "../shared/components/Divider/Divider"
import * as styles from "../pageStyles/cart.module.css"



const CartPage = () => {
  return (
    <>
      <Container fluid='lg'>
        <SectionHeader>
          <SectionDescriptor
            title="Mi pedido"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            className={styles.descriptor}
          />
        </SectionHeader>
        <Divider />
        <Cart />
      </Container>
    </>
  )
}

export default CartPage
