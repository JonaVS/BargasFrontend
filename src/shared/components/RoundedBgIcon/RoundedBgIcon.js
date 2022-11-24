import React from "react"
import { FiFacebook } from "react-icons/fi"
import *as styles from '../RoundedBgIcon/roundedIconBg.module.css'

const RoundedBgIcon = ({ icon, wrapperClassName, url }) => {
  return (
    <div className={`${styles.wrapper} ${wrapperClassName}`}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </div>
  )
}

RoundedBgIcon.defaultProps = {
  icon: <FiFacebook size={30} className={styles.icon} />,
  wrapperClassName: "",
  url: 'www.facebook.com'
}

export default RoundedBgIcon
