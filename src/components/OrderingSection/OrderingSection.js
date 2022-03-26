import React from "react"
import LazyLoad from "react-lazyload"
import Container from "react-bootstrap/Container"
import SubSectionHeader from "../SubSectionHeader/SubSectionHeader"
import OrderingCols from "./OrderingCols/OrderingCols"

const OrderingSection = () => {
  return (
    <LazyLoad once offset={50} height={500}>
      <Container fluid="xl">
        <SubSectionHeader title="Pedidos en linea" withLink link="/menu" linkText="Ordenar">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </SubSectionHeader>
        <OrderingCols />
      </Container>
    </LazyLoad>
  )
}

export default OrderingSection
