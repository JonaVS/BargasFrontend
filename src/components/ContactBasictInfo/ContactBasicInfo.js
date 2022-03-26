import React from "react"
import LazyLoad from "react-lazyload"
import Container from "react-bootstrap/Container"
import SubSectionHeader from "../SubSectionHeader/SubSectionHeader"
import Map from "../GoogleMap/Map/Map"
import *as styles from '../ContactBasictInfo/contactBasicInfo.module.css'

const ContactBasicInfo = () => {
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </SubSectionHeader>
        <Map />
      </Container>
    </LazyLoad>
  )
}

export default ContactBasicInfo
