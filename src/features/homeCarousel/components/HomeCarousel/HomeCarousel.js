import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Carousel } from "react-bootstrap"
import { GatsbyImage } from "gatsby-plugin-image"
import CarouselCaption from "../HomeCarouselCaption/HomeCarouselCaption"
import * as styles from "./homeCarousel.module.css"

const HomeCarousel = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiCarouselItem {
        nodes {
          strapi_id
          title
          description
          url
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
            alt={item.title}
          />
          <CarouselCaption
            item={item.title}
            description={item.description}
            url={item.url}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default HomeCarousel
