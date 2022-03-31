import React, { useContext } from "react"
import { UserContext } from "../../../../context/UserContext"
import { Dropdown } from "react-bootstrap"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { BiUser } from "react-icons/bi"
import { Link } from "gatsby"
import * as styles from "./authDropdown.module.css"


const AuthDropdown = () => {
  const { isLoggedIn } = useContext(UserContext)

  return (
    <Dropdown as={ButtonGroup}>
      <Dropdown.Toggle className={styles.authDp} id="dropdown-custom-1">
        <BiUser className={styles.icon} />
      </Dropdown.Toggle>
      <Dropdown.Menu className={styles.dpMenu}>
        <Dropdown.Item as={Link} to={!isLoggedIn ? '/auth/login' : '/' }>
           {!isLoggedIn ? 'Ingresar' : "Mi Cuenta" }
        </Dropdown.Item>
        <div className={styles.divider} />
        <Dropdown.Item as={Link} to={!isLoggedIn ? '/auth/signup' : '/' }>
           {!isLoggedIn ? 'Registrarse' : "Salir" }
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default AuthDropdown
