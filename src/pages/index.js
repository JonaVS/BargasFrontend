import React from "react"
import { graphql } from "gatsby"
import Seo from "../shared/components/Seo/seo"
import HomeCarousel from "../features/homeCarousel/components/HomeCarousel/HomeCarousel"
import Divider from "../shared/components/Divider/Divider"
import About from "../features/businessInfo/components/AboutSection/AboutSection"
import MenuSection from "../features/businessInfo/components/MenuSection/MenuSection"
import OrderingSection from "../features/businessInfo/components/OrderingSection/OrderingSection"
import ContactBasicInfo from "../features/businessInfo/components/ContactBasictInfo/ContactBasicInfo"

const IndexPage = ({ data }) => {
  
  const { seoData } = data.strapiHomePage

  return (
    <>
      <Seo title={seoData.title} description={seoData.description} />
      <HomeCarousel />
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
