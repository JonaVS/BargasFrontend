import React from "react"
import * as styles from "../TextIcon/textIcon.module.css"
import { AiOutlineYoutube } from "react-icons/ai"

const TextIcon = ({ icon, text, className }) => {
  return (
    <p className={`${styles.textIcon} ${className}`}>
      {icon}
      <span>{text}</span>
    </p>
  )
}

TextIcon.defaultProps = {
  icon: <AiOutlineYoutube size={30} className={styles.icon} />,
  text: "This is a default text",
  className: "",
}

export default TextIcon
