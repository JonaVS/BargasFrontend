import React from "react"
import { Container } from "react-bootstrap"
import * as styles from "../templates/info.module.css"

const Info = ({title}) => {
  return (
    <Container className={styles.container}>
      <div className={styles.infoBody}>
        <h1 className={styles.title}>{title}</h1>
        {Array.from({ length: 5 }).map((_, idx) => (
          <p key={idx} className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        ))}
        <br />
        <br />
        <h3 className={styles.createdAt}>Última actualización: 2/18/2022 </h3>
      </div>
    </Container>
  )
}

Info.defaultProps = {
    title: 'Default title'
}

export default Info
