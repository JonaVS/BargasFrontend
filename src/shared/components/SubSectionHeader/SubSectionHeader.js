import React from "react"
import LinkBtn from "../LinkBtn/LinkBtn"
import * as styles from "../SubSectionHeader/subSectionHeader.module.css"

const SubSectionHeader = ({ title, children, withLink, link, linkText, className }) => {
  return (
    <div className={`${styles.sectionDesc} ${className}`}>
      <h1>{title}</h1>
      <p>{children}</p>
      {withLink && (
        <LinkBtn className={styles.floatRight} link={link}>
          {linkText}
        </LinkBtn>
      )}
      <div className={styles.clearFix}></div>
    </div>
  )
}

SubSectionHeader.defaultProps = {
  title: "A tittle",
  children: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  ),
  className: "",
  link: "/to",
  withLink: false,
  linkText: "Default text",
}

export default SubSectionHeader
