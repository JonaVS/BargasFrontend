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
    <Container >
      <Row className="mt-5 align-items-center">
        <Col className={styles.formCol}>
          <h1 className={styles.subTitle}>Información de contacto</h1>
          <br />
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
          <br />
          <br />
          <hr className="bg-light" />
          <br />
          <h1 className={styles.subTitle}>Formulario de contacto</h1>
          <br />
          <ContactForm />
        </Col>
        <Col md={12} lg className="bg-light p-0 mt-5 mt-md-0">
          <Map />
        </Col>
      </Row>
    </Container>
  )
}
export default ContactPanel
