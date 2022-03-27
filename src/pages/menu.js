import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import HeroContainer from "../shared/components/HeroContainer/HeroContainer"
import HeroCaption from "../shared/components/HeroContainer/HeroCaption/HeroCaption"
import Menu from "../features/menu/Menu/Menu"
import Divider from "../shared/components/Divider/Divider"

const MenuPage = ({ data }) => {

  return (
    <>
      <Seo title="Menú" />
      <HeroContainer
        image={
          data.strapiMenu.heroImage.localFile.childImageSharp.gatsbyImageData
        }
      >
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
    strapiMenu {
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
