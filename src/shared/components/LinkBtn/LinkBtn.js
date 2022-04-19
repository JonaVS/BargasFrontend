import React from "react"
import { Link } from "gatsby"
import * as styles from "../LinkBtn/linkBtn.module.css"

const LinkBtn = ({ children, link, className, callback }) => {
  return (
    <Link
      onClick={callback}
      to={link}
      className={`${styles.linkBtn} ${className}`}
    >
      {children}
    </Link>
  )
}

LinkBtn.defaultProps = {
  link: "/",
  className: "",
  onClick: () => {},
}

export default LinkBtn
