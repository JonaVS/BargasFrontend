import React from "react"
import * as styles from "../SectionDescriptor/sectionDescriptor.module.css"

const SectionDescriptor = ({ title, text, className }) => {
  return (
    <div className={`${styles.sectionDesc} ${className}`}>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}

SectionDescriptor.defaultProps = {
  tittle: 'A tittle',
  text: 'Descriptor Text',
  className: ''
}

export default SectionDescriptor
