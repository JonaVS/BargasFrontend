import React from "react"
import { BiFoodMenu } from "react-icons/bi"
import * as styles from "./heroCaption.module.css"

const HeroCaption = ({ title, text, btnText }) => {
  return (
    <div className={styles.heroCaption}>
      <h1>
        {title}
        <div className={styles.roundedWrapper}>
          <BiFoodMenu className={styles.icon} />
        </div>
      </h1>
      <div className={styles.basicDivider}></div>
      {text !== null && <p>{text}</p>}
      {btnText !== null && <button className={styles.btn}>{btnText}</button>}
    </div>
  )
}

HeroCaption.defaultProps = {
  title: "Default Tittle",
  text: null,
  btnText: null,
}

export default HeroCaption
