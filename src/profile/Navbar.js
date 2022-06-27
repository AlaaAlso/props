import React from "react";
import {Navbar,Nav , Container } from 'react-bootstrap';

const Navbbar = () => {
  return (
    <div>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Samira Photography</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">FASHION</Nav.Link>
            <Nav.Link href="#features">BEAUTY</Nav.Link>
            <Nav.Link href="#pricing">VIDEOS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbbar;
