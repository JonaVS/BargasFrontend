import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import LazyLoad from "react-lazy-load"
import Container from "react-bootstrap/Container"
import { motion } from "framer-motion"
import SubSectionHeader from "../../../../shared/components/SubSectionHeader/SubSectionHeader"
import { GatsbyImage } from "gatsby-plugin-image"
import AboutCols from "./AboutCols/AboutCols"
import * as styles from "./aboutSection.module.css"


//START--Framer motion variants--START
const aboutUs = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.7,
    },
  },
}

const aboutUsImg = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.6,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
}
//END--Framer motion variants--END

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
      strapiGeneralWebsiteInfo {
        basicLocation
        detailedLocation
        openingHours
      }
    }
  `)

  const sectionDesc = data.strapiHomePage.aboutUs.description
  const aboutImage = data.strapiHomePage.aboutImage.localFile.childImageSharp.gatsbyImageData
  const aboutColsData = data.strapiGeneralWebsiteInfo

  return (
    <LazyLoad offset={100}>
      <Container fluid="xl">
        <div className={styles.content}>
          <motion.div
            className={styles.aboutInfo}
            variants={aboutUs}
            initial="hidden"
            whileInView="show"
            viewport={{ fallback: true, once: true }}
          >
            <SubSectionHeader
              title="Sobre nosotros"
              className={styles.aboutContainer}
            >
              {sectionDesc}
            </SubSectionHeader>
          </motion.div>
          <motion.div
            variants={aboutUsImg}
            initial="hidden"
            whileInView="show"
            viewport={{ fallback: true, once: true }}
          >
            <GatsbyImage image={aboutImage} alt="local" />
          </motion.div>
        </div>
        <AboutCols colsData={aboutColsData} />
      </Container>
    </LazyLoad>
  )
}

export default About
