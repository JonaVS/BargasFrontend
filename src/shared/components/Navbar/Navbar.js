import React, { useState } from "react"
import { Navbar, Nav } from "react-bootstrap"
import TopNav from "./TopNav/TopNav"
import { StaticImage } from "gatsby-plugin-image"
import ShoppingBag from "./ShoppingBag/ShoppingBag"
import { Link } from "gatsby"
import SidePanelCart from "../../../features/cart/components/SidePanelCart/SidePanelCart"
import * as styles from "../Navbar/navbar.module.css"
import AuthDropdown from "./AuthDropdown/AuthDropdown"

const NavBar = () => {
  const [showCart, setShowCart] = useState(false)

  function handleShowCart() {
    setShowCart(!showCart)
  }

  return (
    <>
      <Navbar
        fixed="top"
        className={`justify-content-lg-center justify-content-between ${styles.navbar}`}
        expand="lg"
        collapseOnSelect
      >
        <TopNav handleShowCart={handleShowCart} />
        <Navbar.Brand className={styles.navBrand} href="#home">
          <StaticImage
            src="../../../images/logoN.png"
            alt="Bargas Logo Mobile"
            placeholder="blurred"
            width={100}
            quality={100}
          />
        </Navbar.Brand>
        <div className={styles.mobileRight}>
          <AuthDropdown />
          <ShoppingBag handleShowCart={handleShowCart} />
          <Navbar.Toggle
            className={"ms-2 me-4 p-0 border-0"}
            aria-controls="responsive-navbar-nav"
          />
        </div>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-center"
        >
          <Nav className={`align-items-center`}>
            <Nav.Item>
              <Nav.Link
                active={false}
                className={styles.navLink}
                as={Link}
                to="/"
                activeClassName={styles.active}
                eventKey="1"
              >
                Inicio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                active={false}
                className={styles.navLink}
                as={Link}
                to="/menu"
                eventKey="2"
                activeClassName={styles.active}
              >
                Menú
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <StaticImage
                src="../../../images/logoN.png"
                className={styles.logo}
                alt="Bargas Logo"
                placeholder="blurred"
                width={200}
                quality={100}
              />
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                active={false}
                className={styles.navLink}
                as={Link}
                to="/events"
                eventKey="3"
                activeClassName={styles.active}
              >
                Eventos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                active={false}
                className={styles.navLink}
                as={Link}
                to="/contact"
                eventKey="4"
                activeClassName={styles.active}
              >
                Contacto
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <SidePanelCart showCart={showCart} handleShowCart={handleShowCart} />
    </>
  )
}

export default NavBar
