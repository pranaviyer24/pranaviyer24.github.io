import { Navbar, Nav } from "react-bootstrap";

export const PageNavBar = () => {
  return (
    <Navbar id="home" fixed="top" expand="md" className="px-4">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="basic-nav-dropdown">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#work">Work</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
