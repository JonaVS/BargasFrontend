import React from "react"
import { graphql } from "gatsby"
import Seo from "../shared/components/Seo/seo"
import CarouselB from "../features/carousel/Carousel/CarouselB"
import About from "../features/businessInfo/components/AboutSection/AboutSection"
import MenuSection from "../features/businessInfo/components/MenuSection/MenuSection"
import OrderingSection from "../features/businessInfo/components/OrderingSection/OrderingSection"
import ContactBasicInfo from "../features/businessInfo/components/ContactBasictInfo/ContactBasicInfo"
import Divider from "../shared/components/Divider/Divider"

const IndexPage = ({ data }) => {
  console.log(data)

  return (
    <>
      <Seo title="Home" />
      <CarouselB />
      <Divider />
      <About />
      <Divider />
      <MenuSection preview={data.allStrapiMenuPreview.nodes} />
      <Divider />
      <OrderingSection />
      <Divider />
      <ContactBasicInfo />
    </>
  )
}

export default IndexPage

export const indexQuery = graphql`
  query index {
    allStrapiMenuPreview {
      nodes {
        product {
          slug
          name
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, quality: 20,  width: 500)
            }
          }
        }
      }
    }
  }
`
