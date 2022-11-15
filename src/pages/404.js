import React from "react"
import { Container } from "react-bootstrap"
import Seo from "../shared/components/Seo/seo"
import { TfiFaceSad } from "react-icons/tfi";
import LinkBtn from "../shared/components/LinkBtn/LinkBtn";
import * as styles from "../pagesStyles/notFound.module.css"

const NotFoundPage = () => {
  return (
    <Container fluid className={styles.notFoundContainer}>
      <Seo title="Página no encontrada" />
      <div className={styles.notFoundMessage}>
        <TfiFaceSad size={50}/>
        <p>La página que intentas acceder no existe</p>
        <LinkBtn link='/'>Inicio</LinkBtn>
      </div>
    </Container>
  )
}

export default NotFoundPage
