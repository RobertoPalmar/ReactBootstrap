
import React from "react";
import { Button, Col, Container, Dropdown, Image, Nav, NavDropdown, Navbar, Row, Stack, ThemeProvider } from "react-bootstrap";

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
              <NavDropdown title="Categoria" className="me-md-4">
                <Dropdown.Item as={Button} className="bg-info text-black w-100 fw-normal">SASS</Dropdown.Item>
                <Dropdown.Item as={Button} className="bg-info text-black w-100 fw-normal">Bootstrap</Dropdown.Item>
                <Dropdown.Item as={Button} className="bg-info text-black w-100 fw-normal">React</Dropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container
        fluid
        className="App bg-dark vh-100 pt-4 "
      >

        <Row className="mx-1 mx-md-5">
          <Col xs={12} md={6}>
            <Image
              src="../img/main.jpg"
              fluid rounded
              className="my-3 img-md"
            />
            {/* <div className="bg-secondary p-2 my-2 text-white rounded">Contenido A</div> */}
          </Col>
          <Col xs={12} md={6}>
            {/* <div className="bg-primary p-2 my-2 text-white rounded">Contenido B</div> */}
            <Stack gap={2} className="my-3 px-2 col-10 w-100">
              <h2 className="text-white text-center">Titulo de Prueba</h2>
              <p className="text-white text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque aliquid culpa, veniam officiis vitae porro accusamus laudantium ad rem! Eligendi eum laborum quis inventore consequuntur maxime ipsa ea. Recusandae.</p>
              {/* <Button variant="primary">Aceptar</Button>
              <Button variant="secondary">Cancelar</Button> */}
            </Stack>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;