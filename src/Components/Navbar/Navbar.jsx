import React from 'react';
import { Button, Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import logo from './assets/Logo.png';
import styles from './assets/Navbar.module.scss';
export default function Navigationbar() {
  return (
    <div>
      {['sm'].map((expand) => (
        <Navbar key={expand} bg='light' expand={expand} >
          <Container fluid className={styles.navs}>
            <Navbar.Brand href='#'>
              <img src={logo} alt='' width='159' height='40' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'
            >
              <Offcanvas.Body>
                <Nav className={styles.navbarLink}>
                  <Nav.Link href='#action1'>About</Nav.Link>
                  <Nav.Link href='#action2'>Work</Nav.Link>
                  <Nav.Link href='#action2'>Services</Nav.Link>
                  <Nav.Link href='#action2'>Job</Nav.Link>
                </Nav>
                <Button className={styles.button} size='lg'>
                  Contact Us
                </Button>{' '}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}
