import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link } from "gatsby"
import { MdLocationOn, MdPhone, MdMail } from "react-icons/md"
import { FiInstagram, FiFacebook } from "react-icons/fi"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../Footer/footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container fluid={true}>
        <Row className="justify-content-center">
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
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </span>
            </p>
            <p className={styles.footerInfo}>
              <MdPhone className={styles.icon} />
              <span>8888888</span>
            </p>
            <p className={styles.footerInfo}>
              <MdMail className={styles.icon} />
              <span>info.bargascr.com</span>
            </p>
            <div className={styles.roundedWrapper}>
              <a href="www.google.com">
                <FiInstagram className={styles.socialIcon} />
              </a>
            </div>
            <div className={styles.roundedWrapper}>
              <a href="www.google.com">
                <FiFacebook className={styles.socialIcon} />
              </a>
            </div>
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
      </Container>
    </footer>
  )
}

export default Footer
