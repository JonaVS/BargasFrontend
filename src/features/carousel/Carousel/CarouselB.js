import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Carousel } from "react-bootstrap"
import { GatsbyImage } from "gatsby-plugin-image"
import CarouselCaption from "../CarouselCaption/CarouselCaption"
import * as styles from "../Carousel/carousel.module.css"

const CarouselB = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiCarouselItems {
        nodes {
          strapiId
          titulo
          descripcion
          imagen {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `)

  const corouselData = data.allStrapiCarouselItems.nodes

  return (
    <Carousel className={styles.carousel} fade>
      {corouselData.map(item => (
        <Carousel.Item key={item.strapiId} className={styles.itemWrapper}>
          <GatsbyImage
            image={item.imagen.localFile.childImageSharp.gatsbyImageData}
            alt="test"
          />
          <CarouselCaption title={item.titulo} text={item.descripcion} />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default CarouselB
