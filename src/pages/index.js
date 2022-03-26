import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import CarouselB from "../components/Carousel/CarouselB"
import About from "../components/AboutSection/AboutSection"
import MenuSection from "../components/MenuSection/MenuSection"
import OrderingSection from "../components/OrderingSection/OrderingSection"
import ContactBasicInfo from "../components/ContactBasictInfo/ContactBasicInfo"
import Divider from "../components/Divider/Divider"

const IndexPage = ({ data }) => {
  console.log(data)

  return (
    <>
      <Seo title="Home" />
      <CarouselB />
      <Divider />
      <About />
      <Divider />
      <MenuSection preview={data.allStrapiMenuPreviews.nodes} />
      <Divider />
      <OrderingSection />
      <Divider />
      <ContactBasicInfo />
    </>
  )
}

export default IndexPage

export const query = graphql`
  query indexPage {
    allStrapiMenuPreviews {
      nodes {
        producto {
          slug
          nombre
        }
        imagen {
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
