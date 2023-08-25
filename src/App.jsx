
import React from "react";
import { Button, Col, Container, Nav, NavDropdown, Navbar, Row, Stack, ThemeProvider } from "react-bootstrap";

function App() {
  return (
    <Container
      fluid
      className="p-0"
    >
      <Navbar
        expand="md"
        sticky="top"
        className="bg-primary"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand className="fw-bold" href="login"> Practica Front Style </Navbar.Brand>
          <Navbar.Toggle className="bg-secondary" />
          <Navbar.Collapse>
            <Nav className="ms-auto" navbarScroll>
              <Nav.Link>Inicio</Nav.Link>
              <NavDropdown title="Categoria">
                <NavDropdown.Item className="bg-primary">SASS</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container
        fluid
        className="App py-3 bg-dark vh-100"
      >
        <Stack gap={2} className="my-2 col-10 col-md-8 col-lg-5 mx-auto">
          <Button variant="primary">Aceptar</Button>
          <Button variant="secondary">Cancelar</Button>
        </Stack>
      </Container>
    </Container>
  );
}

export default App;
