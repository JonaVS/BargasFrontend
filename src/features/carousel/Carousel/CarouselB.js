import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Carousel } from "react-bootstrap"
import { GatsbyImage } from "gatsby-plugin-image"
import CarouselCaption from "../CarouselCaption/CarouselCaption"
import * as styles from "../Carousel/carousel.module.css"

const CarouselB = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiCarouselItem {
        nodes {
          strapi_id
          title
          description
          image {
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

  const corouselData = data.allStrapiCarouselItem.nodes

  return (
    <Carousel className={styles.carousel} fade>
      {corouselData.map(item => (
        <Carousel.Item key={item.strapi_id} className={styles.itemWrapper}>
          <GatsbyImage
            image={item.image.localFile.childImageSharp.gatsbyImageData}
            alt="test"
          />
          <CarouselCaption title={item.title} text={item.description} />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default CarouselB
