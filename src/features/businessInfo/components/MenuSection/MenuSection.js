import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import LazyLoad from "react-lazy-load"
import Container from "react-bootstrap/Container"
import SubSectionHeader from "../../../../shared/components/SubSectionHeader/SubSectionHeader"
import MenuSectionPreview from "../MenuSectionPreview/MenuSectionPreview"

const MenuSection = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiHomePage {
        aboutMenu {
          description
        }
      }
      allStrapiMenuPreview {
        nodes {
          product {
            name
            slug
          }
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, quality: 50, width: 500)
              }
            }
          }
        }
      }
    }
  `)

  const sectionDesc = data.strapiHomePage.aboutMenu.description
  const menuPreview = data.allStrapiMenuPreview.nodes

  return (
    <LazyLoad offset={100}>
      <Container>
        <SubSectionHeader
          title="Menú"
          withLink
          link="/menu"
          linkText="Ver menú"
        >
          {sectionDesc}
        </SubSectionHeader>
        <MenuSectionPreview menuPreview={menuPreview}/>
      </Container>
    </LazyLoad>
  )
}

export default MenuSection
