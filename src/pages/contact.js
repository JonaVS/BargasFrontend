import React from "react"
import { graphql } from "gatsby"
import Seo from "../shared/components/Seo/seo"
import HeroContainer from "../shared/components/HeroContainer/HeroContainer"
import HeroCaption from "../shared/components/HeroContainer/HeroCaption/HeroCaption"
import { BiChat } from "react-icons/bi"
import Divider from "../shared/components/Divider/Divider"
import LazyLoad from "react-lazy-load"
import ContactPanel from "../features/businessInfo/components/ContactPanel/ContactPanel"

const Contact = ({ data }) => {

  const seoData = data.strapiContactPage.seoData
  const heroImage =
    data.strapiContactPage.heroImage.localFile.childImageSharp.gatsbyImageData

  return (
    <>
      <Seo title={seoData.title} description={seoData.description} />
      <HeroContainer image={heroImage}>
        <HeroCaption
          title={seoData.title}
          text={seoData.description}
          icon={<BiChat/>}
        />
      </HeroContainer>
      <Divider />
      <LazyLoad>
        <ContactPanel />
      </LazyLoad>
    </>
  )
}

export default Contact

export const query = graphql`
  query contactPage {
    strapiContactPage {
      seoData {
        title
        description
      }
      heroImage {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, quality: 80)
          }
        }
      }
    }
  }
`
