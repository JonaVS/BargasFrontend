import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import LazyLoad from "react-lazyload"
import Container from "react-bootstrap/Container"
import SubSectionHeader from "../../../../shared/components/SubSectionHeader/SubSectionHeader"
import Masonry from "react-masonry-css"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "../MenuSection/menuSection.module.css"

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

  //Breakpoints for Masonry
  const breakPoints = {
    default: 2,
  }

  const sectionDesc = data.strapiHomePage.aboutMenu.description
  const menuPreview = data.allStrapiMenuPreview.nodes

  return (
    <LazyLoad once offset={50} height={500}>
      <Container>
        <SubSectionHeader
          title="Menú"
          withLink
          link="/menu"
          linkText="Ver menú"
        >
          {sectionDesc}
        </SubSectionHeader>
        <div className={styles.masonryWrapper}>
          <Masonry
            breakpointCols={breakPoints}
            className={styles.masonryGrid}
            columnClassName={styles.masonryCol}
          >
            {menuPreview.map(item => {
              return (
                <div key={item.product.name}>
                  <GatsbyImage
                    image={item.image.localFile.childImageSharp.gatsbyImageData}
                    alt={item.product.name}
                  />
                </div>
              )
            })}
          </Masonry>
        </div>
      </Container>
    </LazyLoad>
  )
}

export default MenuSection
