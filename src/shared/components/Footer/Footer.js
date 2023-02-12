import React from "react"
import Container from "react-bootstrap/Container"
import { Row, Col  } from "react-bootstrap"
import { graphql, Link, useStaticQuery } from "gatsby"
import { MdLocationOn, MdPhone, MdMail } from "react-icons/md"
import { FiInstagram, FiFacebook } from "react-icons/fi"
import RoundedBgIcon from "../RoundedBgIcon/RoundedBgIcon"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../Footer/footer.module.css"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiGeneralWebsiteInfo {
        detailedLocation
        phone
        generalEmail
        facebookUrl
        instagramUrl
      }
    }
  `)

  const footerData = data.strapiGeneralWebsiteInfo

  if (window && window.location.pathname === "/app/QRmenu") return null

  return (
    <footer className={styles.footer}>
        <Row>
          <Col lg={true} className={styles.footerCol}>
            <h3 className={styles.footerTittle}>INFORMACIÓN</h3>
            <Link to="/info/privacy">Política de privacidad</Link>
            <Link to="/info/termsAndConditions">Condiciones de uso</Link>
            <Link to="/info/help">Ayuda de compra</Link>
            <Link to="/contact">Contacto</Link>
          </Col>
          <Col lg={true} className={styles.footerCol}>
            <h3 className={styles.footerTittle}>TIENES ALGUNA PREGUNTA?</h3>
            <p className={styles.footerInfo}>
              <MdLocationOn className={styles.icon} />
              <span>{footerData.detailedLocation} </span>
            </p>
            <p className={styles.footerInfo}>
              <MdPhone className={styles.icon} />
              <span>{footerData.phone}</span>
            </p>
            <p className={styles.footerInfo}>
              <MdMail className={styles.icon} />
              <span>{footerData.generalEmail}</span>
            </p>
            <RoundedBgIcon
              icon={<FiInstagram className={styles.socialIcon} />}
              url={footerData.instagramUrl}
            />
            <RoundedBgIcon
              icon={<FiFacebook className={styles.socialIcon} />}
              url={footerData.facebookUrl}
            />
          </Col>
          <Col lg={true} className={styles.footerCol}>
            <h3 className={styles.footerTittle}>MEDIOS DE PAGO ACEPTADOS</h3>
            <StaticImage
              src="../../../images/paymentMethods.png"
              alt="Payment Methods"
              placeholder="blurred"
              width={400}
              quality={80}
            />
          </Col>
        </Row>
    </footer>
  )
}

export default Footer
