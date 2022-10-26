import React, { useContext } from "react"
import { UserContext } from "../../../../context/UserContext"
import { BiUser } from "react-icons/bi"
import { AiOutlineMail } from "react-icons/ai"
import ChangePasswordForm from "../ChangePasswordForm/ChangePasswordForm"
import * as styles from "./userAccountPanel.module.css"

const UserAccountPanel = () => {
    
  const { user } = useContext(UserContext)

  return (
    <>
      <div className={styles.accountModule}>
        <h2>Información de cuenta</h2>
        <span>
          <BiUser className={styles.icon} />
          {user && user.username}
        </span>
        <span>
          <AiOutlineMail className={styles.icon} />
          {user && user.email}
        </span>
        <br />
        <h2>Cambiar contraseña</h2>
        <ChangePasswordForm />
      </div>
    </>
  )
}

export default UserAccountPanel
