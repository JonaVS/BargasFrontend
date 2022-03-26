import React from "react"
import LazyLoad from "react-lazyload"
import burrito from "../../images/mansonry/burrito.jpg"
import ensalada from "../../images/mansonry/ensalada.jpg"
import hambu from "../../images/mansonry/hamburger2.jpg"
import papas from "../../images/mansonry/papas.jpg"
import pan from "../../images/mansonry/emparedadoV.jpg"
import Container from "react-bootstrap/Container"
import SubSectionHeader from "../SubSectionHeader/SubSectionHeader"
import Masonry from "react-masonry-css"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "../MenuSection/menuSection.module.css"


const MenuSection = ({ preview }) => {
  const masonItems = [
    { id: 1, image: burrito },
    { id: 2, image: ensalada },
    { id: 3, image: pan },
    { id: 4, image: hambu },
  ]

  console.log(preview)

  //Breakpoints for Masonry
  const breakPoints = {
    default: 2,
  }

  return (
    <LazyLoad once offset={50} height={500}>
      <Container>
        <SubSectionHeader
          title="Menú"
          withLink
          link="/menu"
          linkText="Ver menú"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </SubSectionHeader>
        <div className={styles.masonryWrapper}>
          <Masonry
            breakpointCols={breakPoints}
            className={styles.masonryGrid}
            columnClassName={styles.masonryCol}
          >
            {preview.map(item => {
              return (
                <div key={item.producto.nombre}>
                  <GatsbyImage
                    image={
                      item.imagen.localFile.childImageSharp.gatsbyImageData
                    }
                    alt={item.producto.nombre}
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
