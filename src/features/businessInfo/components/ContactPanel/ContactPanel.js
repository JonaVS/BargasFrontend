import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import TextIcon from "../../../../shared/components/TextIcon/TextIcon"
import { MdLocationOn, MdMail, MdPhone } from "react-icons/md"
import RoundedBgIcon from "../../../../shared/components/RoundedBgIcon/RoundedBgIcon"
import { FiFacebook, FiInstagram } from "react-icons/fi"
import ContactForm from "../../components/ContactPanel/ContactForm/ContactForm"
import Map from "../../../../shared/components/GoogleMap/Map/Map"
import * as styles from "./contactPanel.module.css"

const ContactPanel = () => {
  return (
    <Container>
      <Row className={styles.panelWrapper}>
        <Col sm={12} lg={6} className={styles.formCol}>
          <h2 className={styles.subTitle}>Información de contacto</h2>
          <TextIcon
            icon={<MdLocationOn className={styles.icon} />}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore"  
          />
          <TextIcon
            icon={<MdPhone className={styles.icon} />}
            text="88888888"
          />
          <TextIcon
            icon={<MdMail className={styles.icon} />}
            text="info.bargascr.com"
          />
          <RoundedBgIcon
            icon={<FiInstagram className={styles.socialIcon} />}
            url="www.google.com"
          />
          <RoundedBgIcon
            icon={<FiFacebook className={styles.socialIcon} />}
            url="www.facebook.com"
          />
          <h2 className={styles.subTitle}>Formulario de contacto</h2>
          <ContactForm />
        </Col>
        <Col sm={12} lg={6} className={styles.mapCol}>
          <Map />
        </Col>
      </Row>
    </Container>
  )
}
export default ContactPanel
