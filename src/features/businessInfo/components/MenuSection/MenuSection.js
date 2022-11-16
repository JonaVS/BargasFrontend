import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import LazyLoad from "react-lazy-load"
import Container from "react-bootstrap/Container"
import SubSectionHeader from "../../../../shared/components/SubSectionHeader/SubSectionHeader"
import MenuSectionPreview from "../MenuSectionPreview/MenuSectionPreview"

//START--Framer motion variants--START
const header = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      delay: 1,
    },
  },
}
//END--Framer motion variants--END

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
          variants={header}
          initial="hidden"
          whileInView="show"
          viewport={{ fallback: true, once: true }}
        >
          {sectionDesc}
        </SubSectionHeader>
        <MenuSectionPreview menuPreview={menuPreview}/>
      </Container>
    </LazyLoad>
  )
}

export default MenuSection
