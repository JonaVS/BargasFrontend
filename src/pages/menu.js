import React from "react"
import { graphql } from "gatsby"
import Seo from "../shared/components/Seo/seo"
import HeroContainer from "../shared/components/HeroContainer/HeroContainer"
import HeroCaption from "../shared/components/HeroContainer/HeroCaption/HeroCaption"
import { MdOutlineFoodBank } from "react-icons/md";
import Menu from "../features/menu/Menu/Menu"
import Divider from "../shared/components/Divider/Divider"

const MenuPage = ({ data }) => {
  
  const seoData = data.strapiMenuPage.seoData
  const heroImage =
    data.strapiMenuPage.heroImage.localFile.childImageSharp.gatsbyImageData

  return (
    <>
      <Seo title={seoData.title} description={seoData.description}/>
      <HeroContainer image={heroImage}>
        <HeroCaption
          title={seoData.title}
          text={seoData.description}
          btnText="Explorar"
          icon={<MdOutlineFoodBank/>}
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
      seoData {
        title
        description
      }
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
