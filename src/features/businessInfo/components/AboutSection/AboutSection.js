import React from "react"
import LazyLoad from "react-lazyload"
import Container from "react-bootstrap/Container"
import SubSectionHeader from "../../../../shared/components/SubSectionHeader/SubSectionHeader"
import { StaticImage } from "gatsby-plugin-image"
import AboutCols from "./AboutCols/AboutCols"
import * as styles from "./aboutSection.module.css"

const About = () => {
  return (
    <LazyLoad once offset={100} height={400}>
      <Container fluid="xl">
        <div className={styles.content}>
          <div className={styles.aboutInfo}>
            <SubSectionHeader title="Sobre nosotros" className={styles.aboutContainer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
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
