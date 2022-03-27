import React from "react"
import LinkBtn from "../../../shared/components/LinkBtn/LinkBtn"
import * as styles from "./sectionHeader.module.css"

const SectionHeader = ({
  children,
  linkBtn,
  linkBtnText,
  to,
  className,
}) => {

  
  console.log('home menu se ha renderizado')
  return (
    <div className={`${styles.sectionHeader} ${className}`}>
      {children}
      {linkBtn ? (
        <LinkBtn link={to} className={styles.linkBtn}>
          {linkBtnText}
        </LinkBtn>
      ) : null}
    </div>
  )
}

SectionHeader.defaultProps = {
  linkBtn: false,
  linkBtnText: "Default Text",
  className: '',
  children: <></>,
  to:'/'
}

export default SectionHeader
