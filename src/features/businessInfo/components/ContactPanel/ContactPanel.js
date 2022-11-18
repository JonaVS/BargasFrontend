import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import TextIcon from "../../../../shared/components/TextIcon/TextIcon"
import { MdLocationOn, MdMail, MdPhone } from "react-icons/md"
import RoundedBgIcon from "../../../../shared/components/RoundedBgIcon/RoundedBgIcon"
import { FiFacebook, FiInstagram } from "react-icons/fi"
import ContactForm from "../../components/ContactPanel/ContactForm/ContactForm"
import Map from "../../../../shared/components/GoogleMap/Map/Map"
import * as styles from "./contactPanel.module.css"

//START--Framer motion variants--START
const panel = {
  hidden: { opacity: 0, y: -50, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
    },
  },
}
//END--Framer motion variants--END

const ContactPanel = ({data}) => {
  
  const { detailedLocation, phone, generalEmail, instagramUrl, facebookUrl } = data

  return (
    <Container>
      <Row
        as={motion.div}
        variants={panel}
        initial="hidden"
        whileInView="show"
        viewport={{ fallback: true, once: true, amount: 0.25 }}
        className={styles.panelWrapper}
      >
        <Col sm={12} lg={6} className={styles.formCol}>
          <h2 className={styles.subTitle}>Información de contacto</h2>
          <TextIcon
            icon={<MdLocationOn className={styles.icon} />}
            text={detailedLocation}
          />
          <TextIcon
            icon={<MdPhone className={styles.icon} />}
            text={phone}
          />
          <TextIcon
            icon={<MdMail className={styles.icon} />}
            text={generalEmail}
          />
          <RoundedBgIcon
            icon={<FiInstagram className={styles.socialIcon} />}
            url={instagramUrl}
          />
          <RoundedBgIcon
            icon={<FiFacebook className={styles.socialIcon} />}
            url={facebookUrl}
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

ContactPanel.defaultProps = {
  data: {
    detailedLocation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod ",
    phone: "8888888",
    generalEmail: "www.dummy@mail.com",
    instagramUrl: "www.instagram.com",
    facebookUrl: "www.facebook.com",
  },
}

export default ContactPanel
