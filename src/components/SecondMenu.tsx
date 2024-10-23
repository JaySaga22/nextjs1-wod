"use client";

import { Navbar, Container, Nav, Image} from "react-bootstrap";
import { Search, Cart } from "react-bootstrap-icons";

const SecondMenu = () => (
    <Navbar bg="light" expand="lg" className="w-100" id="shopColor">
    <Container fluid>
      <Nav className="me-auto">
        <Image src="https://courses.ics.hawaii.edu/ics314f24/morea/ui-frameworks/wod-aloha-beer-logo.png" height="100px" width="100px"/>
      </Nav>
      <Nav className="text-align-center">
        <a className="nav-link" href="#">Locations & Menus</a>
        <a className="nav-link" href="#">Events</a>
        <a className="nav-link" href="#">Brewery</a>
        <a className="nav-link active" href="#" id="shopColor">Shop</a>
        </Nav>
      <Nav className="ms-auto">
        <Nav.Link><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Account</a></Nav.Link>
        <Nav.Link><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Search</a></Nav.Link>
        <Nav.Link><Search style={{ color: 'black' }} /></Nav.Link>
        <Nav.Link><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Cart</a></Nav.Link>
        <Nav.Link><Cart style={{ color: 'black' }} /></Nav.Link>
      </Nav>
    </Container>
    </Navbar>
    );

export default SecondMenu; 