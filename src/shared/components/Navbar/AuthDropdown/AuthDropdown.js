import React, { useContext } from "react"
import { UserContext } from "../../../../context/UserContext"
import { Dropdown } from "react-bootstrap"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { BiUser } from "react-icons/bi"
import { Link } from "gatsby"
import * as styles from "./authDropdown.module.css"

const AuthDropdown = () => {
  const { user, logout } = useContext(UserContext)

  return (
    <Dropdown as={ButtonGroup}>
      <Dropdown.Toggle title="Auth options" className={styles.authDp}>
      {user && <div className={styles.onlineStatus}/>}
        <BiUser className={styles.icon} />
      </Dropdown.Toggle>
      <Dropdown.Menu className={styles.dpMenu}>
        <Dropdown.Item as={Link} to={!user ? "/app/login" : "/app/user-account"}>
          {!user ? "Ingresar" : "Mi Cuenta"}
        </Dropdown.Item>
        <div className={styles.divider} />
        {!user ? (
          <Dropdown.Item as={Link} to="/app/signup">
            Registrarse
          </Dropdown.Item>
        ) : (
          <Dropdown.Item onClick={logout}>
            Salir
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default AuthDropdown
