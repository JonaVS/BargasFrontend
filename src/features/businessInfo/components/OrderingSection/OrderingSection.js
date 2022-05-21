import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import LazyLoad from "react-lazyload"
import Container from "react-bootstrap/Container"
import SubSectionHeader from "../../../../shared/components/SubSectionHeader/SubSectionHeader"
import OrderingCols from "./OrderingCols/OrderingCols"

const OrderingSection = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiHomePage {
        aboutOrdering {
          description
        }
        aboutOrderingCols {
          onlineOrdering
          delivery
          chatHelp
        }
      }
    }
  `)

  const sectionDesc = data.strapiHomePage.aboutOrdering.description

  return (
    <LazyLoad once offset={50} height={500}>
      <Container fluid="xl">
        <SubSectionHeader
          title="Pedidos en linea"
          withLink
          link="/menu"
          linkText="Ordenar"
        >
          {sectionDesc}
        </SubSectionHeader>
        <OrderingCols />
      </Container>
    </LazyLoad>
  )
}

export default OrderingSection
