"use client";

import { Container, Row, Col } from "react-bootstrap";

const Footerbar = () => (
    <footer style={{ backgroundColor: '#EDC601', padding: '100px' }}>
    <Container>
      <Row>
        <Col className="text-center">
          <h1>&copy; KAKA'AKO - At 700 QUEEN ST</h1>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footerbar;