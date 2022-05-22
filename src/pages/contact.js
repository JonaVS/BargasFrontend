import React from "react"
import { graphql } from "gatsby"
import Seo from "../shared/components/Seo/seo"
import HeroContainer from "../shared/components/HeroContainer/HeroContainer"
import HeroCaption from "../shared/components/HeroContainer/HeroCaption/HeroCaption"
import ContactPanel from "../features/businessInfo/components/ContactPanel/ContactPanel"
import Divider from "../shared/components/Divider/Divider"

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
        />
      </HeroContainer>
      <Divider />
      <ContactPanel />
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
