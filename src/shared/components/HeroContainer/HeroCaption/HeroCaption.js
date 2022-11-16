import React from "react"
import { BiFoodMenu } from "react-icons/bi"
import * as styles from "./heroCaption.module.css"

const HeroCaption = ({ title, text, btnText, icon }) => {
  return (
    <div className={styles.heroCaption}>
      <h1>
        {title}
        <div className={styles.roundedWrapper}>
          {icon}
        </div>
      </h1>
      <div className={styles.basicDivider}/>
      {text && <p>{text}</p>}
      {btnText && <button className={styles.btn}>{btnText}</button>}
    </div>
  )
}

HeroCaption.defaultProps = {
  title: "Default Tittle",
  text: null,
  btnText: null,
  icon: <BiFoodMenu/>
}

export default HeroCaption
