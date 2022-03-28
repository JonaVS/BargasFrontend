import React from "react"
import { Link } from "gatsby"
import *as styles from './LabelLink.module.css'

const LabelLink = ({ labelText, to, linkText, spanClass, linkClass }) => {
  return (
    <span className={`${styles.linkLabel} ${spanClass}`}>
      {labelText}
      <Link to={to} className={`${styles.link} ${linkClass}`}>
        {linkText}
      </Link>
    </span>
  )
}

export default LabelLink

LabelLink.defaultProps = {
  labelText: "Default label:",
  to: "/",
  linkText: "/",
  spanClass: "",
  linkClass: "",
}
