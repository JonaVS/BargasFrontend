import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import LazyLoad from "react-lazyload"
import Container from "react-bootstrap/Container"
import SubSectionHeader from "../../../../shared/components/SubSectionHeader/SubSectionHeader"
import { StaticImage } from "gatsby-plugin-image"
import AboutCols from "./AboutCols/AboutCols"
import * as styles from "./aboutSection.module.css"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiHomePage {
        aboutImage {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, quality: 60, width: 650)
            }
          }
        }
        aboutUs {
          description
        }
      }
    }
  `)

  const sectionDesc = data.strapiHomePage.aboutUs.description

  return (
    <LazyLoad once offset={100} height={400}>
      <Container fluid="xl">
        <div className={styles.content}>
          <div className={styles.aboutInfo}>
            <SubSectionHeader
              title="Sobre nosotros"
              className={styles.aboutContainer}
            >
            {sectionDesc}
            </SubSectionHeader>
          </div>
          <StaticImage
            src="../../../../images/local.jpg"
            alt="Bargas"
            placeholder="blurred"
            width={650}
          />
        </div>
        <AboutCols />
      </Container>
    </LazyLoad>
  )
}

export default About
