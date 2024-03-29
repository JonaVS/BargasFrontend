import React from "react"
import Seo from "../../../shared/components/Seo/seo"
import Container from 'react-bootstrap/Container'
import SectionHeader from "../../../shared/components/SectionHeader/SectionHeader"
import SectionDescriptor from "../../../shared/components/SectionDescriptor/SectionDescriptor"
import Cart from "../components/Cart/Cart"
import * as styles from "./cartPage.module.css"

const CartPage = () => {
  return (
    <>
      <Seo title='Pedido'/>
      <Container fluid='lg'>
        <SectionHeader>
          <SectionDescriptor
            title="Mi pedido"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            className={styles.descriptor}
          />
        </SectionHeader>
        <Cart />
      </Container>
    </>
  )
}

export default CartPage
