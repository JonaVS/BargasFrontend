import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import LazyLoad from "react-lazy-load"
import Container from "react-bootstrap/Container"
import SubSectionHeader from "../../../../shared/components/SubSectionHeader/SubSectionHeader"
import OrderingCols from "./OrderingCols/OrderingCols"

//START--Framer motion variants--START
const header = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      delay: 0.5,
    },
  },
}
//END--Framer motion variants--END

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
          variants={header}
          initial="hidden"
          whileInView="show"
          viewport={{ fallback: true, once: true, amount: 0.5 }}
        >
          {sectionDesc}
        </SubSectionHeader>
        <OrderingCols colData={colData} />
      </Container>
    </LazyLoad>
  )
}

export default OrderingSection
