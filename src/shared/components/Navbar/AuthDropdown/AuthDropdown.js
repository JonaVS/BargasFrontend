import { Link, navigate } from "gatsby"
import React from "react"
import { Dropdown } from "react-bootstrap"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { BiUser } from "react-icons/bi"
import * as styles from "./authDropdown.module.css"

const AuthDropdown = () => {
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
        <Dropdown.Item eventKey="login">Ingresar</Dropdown.Item>
        <div className={styles.divider} />
        <Dropdown.Item eventKey="signup">Registrarse</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default AuthDropdown
