import React from "react"
import { graphql } from "gatsby"
import Seo from "../shared/components/Seo/seo"
import HeroContainer from "../shared/components/HeroContainer/HeroContainer"
import HeroCaption from "../shared/components/HeroContainer/HeroCaption/HeroCaption"
import Menu from "../features/menu/Menu/Menu"
import Divider from "../shared/components/Divider/Divider"

const MenuPage = ({ data }) => {
  
  const heroImage =
    data.strapiMenuPage.heroImage.localFile.childImageSharp.gatsbyImageData

  return (
    <>
      <Seo title="Menú" />
      <HeroContainer image={heroImage}>
        <HeroCaption
          title="Menú"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          btnText="Explorar"
        />
      </HeroContainer>
      <Divider />
      <Menu />
    </>
  )
}

export default MenuPage

export const query = graphql`
  query menuPage {
    strapiMenuPage {
      heroImage {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, quality: 50)
          }
        }
      }
    }
  }
`
