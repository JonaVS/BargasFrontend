import React from "react"
import { Container } from "react-bootstrap"
import ReactMarkdown from "react-markdown"
import * as styles from "../templates/info.module.css"

const Info = ({ markdown }) => {
  return (
    <Container className={styles.container}>
      <ReactMarkdown className={styles.markdownWrapper} children={markdown} />
    </Container>
  )
}

Info.defaultProps = {
  markdown: "# Default content",
}

export default Info
