import React from 'react';
import { Button, Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import logo from './assets/Logo.png';
import styles from './assets/Navbar.module.scss';
export default function Navigationbar() {
  return (
    <div>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} >
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
                  <a href='#action1'>About</a>
                  <a href='#action2'>Work</a>
                  <a href='#action2'>Services</a>
                  <a href='#action2'>Job</a>
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
