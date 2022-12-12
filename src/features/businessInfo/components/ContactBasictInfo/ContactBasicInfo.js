import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import LazyLoad from "react-lazy-load"
import Container from "react-bootstrap/Container"
import SubSectionHeader from "../../../../shared/components/SubSectionHeader/SubSectionHeader"
import { motion } from "framer-motion"
import Map from "../../../../shared/components/GoogleMap/Map/Map"
import * as styles from "../ContactBasictInfo/contactBasicInfo.module.css"

//START--Framer motion variants--START
const header = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      delay: 0.5,
    },
  },
}

const mapHolder = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
}
//END--Framer motion variants--END

const ContactBasicInfo = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiHomePage {
        aboutContact {
          description
        }
      }
    }
  `)

  const sectionDesc = data.strapiHomePage.aboutContact.description

  return (
    <LazyLoad offset={100}>
      <Container>
        <SubSectionHeader
          title="Contacto"
          withLink
          link="/contact"
          linkText="Contactar"
          className={styles.infoContainer}
          variants={header}
          initial="hidden"
          whileInView="show"
          viewport={{ fallback: true, once: true, amount: 0.5 }}
        >
          {sectionDesc}
        </SubSectionHeader>
        <motion.div
          variants={mapHolder}
          initial="hidden"
          whileInView="show"
          viewport={{ fallback: true, once: true, amount: 0.3 }}
        >
          <Map />
        </motion.div>
      </Container>
    </LazyLoad>
  )
}

export default ContactBasicInfo
