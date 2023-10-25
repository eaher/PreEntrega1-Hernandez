import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { CartWidget } from "../CartWidget/CartWidget";
import styles from "./NavBar.module.css";
import { auto } from "@popperjs/core";

export const NavBar = () => {
  return (
    <>
      <div className="container-fluid">
        <Navbar expand="lg">
          <Navbar.Brand href="#home">Nautica Outdoor</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
            <Nav>
              <Nav.Link href="#inicio">Inicio</Nav.Link>
              <Nav.Link href="#shop">Shop</Nav.Link>
              <Nav.Link href="#servicios">Servicios</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <div className={`${styles.cartContainer}`}>
            <CartWidget />
          </div>
        </Navbar>
      </div>
    </>
  );
};
