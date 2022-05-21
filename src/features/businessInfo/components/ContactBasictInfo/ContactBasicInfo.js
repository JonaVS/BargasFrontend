import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import LazyLoad from "react-lazyload"
import Container from "react-bootstrap/Container"
import SubSectionHeader from "../../../../shared/components/SubSectionHeader/SubSectionHeader"
import Map from "../../../../shared/components/GoogleMap/Map/Map"
import * as styles from "../ContactBasictInfo/contactBasicInfo.module.css"

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
    <LazyLoad once offset={50} height={500}>
      <Container>
        <SubSectionHeader
          title="Contacto"
          withLink
          link="/contact"
          linkText="Contactar"
          className={styles.infoContainer}
        >
          {sectionDesc}
        </SubSectionHeader>
        <Map />
      </Container>
    </LazyLoad>
  )
}

export default ContactBasicInfo
