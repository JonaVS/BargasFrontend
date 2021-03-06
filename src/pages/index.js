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
  
  const { seoData } = data.strapiHomePage

  return (
    <>
      <Seo title={seoData.title} description={seoData.description} />
      <CarouselB />
      <Divider />
      <About />
      <Divider />
      <MenuSection />
      <Divider />
      <OrderingSection />
      <Divider />
      <ContactBasicInfo />
    </>
  )
}

export default IndexPage

export const indexQuery = graphql`
  query HomePageData {
    strapiHomePage {
      seoData {
        title
        description
      }
    }
  }
`
