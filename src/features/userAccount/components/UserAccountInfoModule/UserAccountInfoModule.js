import React, { useContext } from "react"
import { UserContext } from "../../../../context/UserContext"
import UserAccountModule from "../UserAccountModule/UserAccountModule"
import { BiUser } from "react-icons/bi"
import { AiOutlineMail } from "react-icons/ai"
import ChangePasswordForm from '../ChangePasswordForm/ChangePasswordForm'
import * as styles from './userAccountInfoModule.module.css'

const UserAccountInfoModule = () => {
const { user } = useContext(UserContext)

  return (
    <UserAccountModule>
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
    </UserAccountModule>
  )
}

export default UserAccountInfoModule
