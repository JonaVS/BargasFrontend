import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import LazyLoad from "react-lazy-load"
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
  const colData = data.strapiHomePage.aboutOrderingCols

  return (
    <LazyLoad offset={100}>
      <Container fluid="xl">
        <SubSectionHeader
          title="Pedidos en linea"
          withLink
          link="/menu"
          linkText="Ordenar"
        >
          {sectionDesc}
        </SubSectionHeader>
        <OrderingCols colData={colData} />
      </Container>
    </LazyLoad>
  )
}

export default OrderingSection
