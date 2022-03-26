import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import HeroContainer from "../components/HeroContainer/HeroContainer"
import HeroCaption from "../components/HeroContainer/HeroCaption/HeroCaption"
import ContactPanel from "../components/ContactPanel/ContactPanel"
import Divider from "../components/Divider/Divider"


const Contact = ({ data }) => {

  return (
    <>
      <Seo title="Menú" />
      <HeroContainer
        image={
          data.strapiContacto.heroImage.localFile.childImageSharp.gatsbyImageData
        }
      >
        <HeroCaption
          title="Contacto"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />
      </HeroContainer>
      <Divider />
      <ContactPanel/>
    </>
  )
}

export default Contact

export const query = graphql`
  query contactPage {
    strapiContacto {
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
