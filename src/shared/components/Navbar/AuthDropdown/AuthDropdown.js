import React, { useContext } from "react"
import { UserContext } from "../../../../context/UserContext"
import { Dropdown } from "react-bootstrap"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { BiUser } from "react-icons/bi"
import { Link } from "gatsby"
import * as styles from "./authDropdown.module.css"

const AuthDropdown = () => {
  const { isLoggedIn, logout } = useContext(UserContext)

  return (
    <Dropdown as={ButtonGroup}>
      <Dropdown.Toggle className={styles.authDp}>
      {isLoggedIn && <div className={styles.onlineStatus}/>}
        <BiUser className={styles.icon} />
      </Dropdown.Toggle>
      <Dropdown.Menu className={styles.dpMenu}>
        <Dropdown.Item as={Link} to={!isLoggedIn ? "/app/login" : "/app/user-account"}>
          {!isLoggedIn ? "Ingresar" : "Mi Cuenta"}
        </Dropdown.Item>
        <div className={styles.divider} />
        {!isLoggedIn ? (
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
