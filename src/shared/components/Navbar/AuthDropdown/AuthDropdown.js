import { Link, navigate } from "gatsby"
import React, { useContext } from "react"
import { Dropdown } from "react-bootstrap"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { BiUser } from "react-icons/bi"
import { UserContext } from "../../../../context/UserContext"
import * as styles from "./authDropdown.module.css"

const AuthDropdown = () => {
  const { isLoggedIn } = useContext(UserContext)

  console.log(isLoggedIn)
  const handleLinkKey = key => {
    if (key === "login") {
      navigate("/auth/login")
    } else {
      navigate("/auth/signup")
    }
  }

  return (
    <Dropdown onSelect={handleLinkKey} as={ButtonGroup}>
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
