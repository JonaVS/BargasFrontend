import React from "react"
import { graphql } from "gatsby"
import Seo from "../shared/components/Seo/seo"
import HeroContainer from "../shared/components/HeroContainer/HeroContainer"
import HeroCaption from "../shared/components/HeroContainer/HeroCaption/HeroCaption"
import ContactPanel from "../features/businessInfo/components/ContactPanel/ContactPanel"
import Divider from "../shared/components/Divider/Divider"

const Contact = ({ data }) => {
  
  const heroImage =
    data.strapiContactPage.heroImage.localFile.childImageSharp.gatsbyImageData

  return (
    <>
      <Seo title="Menú" />
      <HeroContainer image={heroImage}>
        <HeroCaption
          title="Contacto"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
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
