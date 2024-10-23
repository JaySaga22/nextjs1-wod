import { Navbar, Container, Nav } from "react-bootstrap";
import { Facebook, Instagram } from "react-bootstrap-icons";

const TopMenu = () => (
    <Navbar bg="dark" expand="lg" className="w-100">
      <Container fluid>
      <Nav className="me-auto">
          <Nav.Link>
            <Facebook style={{ color: 'white', marginRight:'-10px'}} />
          </Nav.Link>
          <Nav.Link>
            <Instagram style={{ color: 'white' }} />
          </Nav.Link>
      </Nav>
      <h5 className="text-center" id="centerText" style={{ color: 'grey', width: '100%' }}> 
          Independent craft brewery and beer garden in Hawai'i
      </h5>
      </Container>
    </Navbar>
  );

export default TopMenu;