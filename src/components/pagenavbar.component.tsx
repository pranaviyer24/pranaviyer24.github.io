import { Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface PageNavBarProps {
  isHome: boolean;
  setIsHome: (isHome: boolean) => void;
}

export const PageNavBar = (props: PageNavBarProps) => {
  const { isHome, setIsHome } = props;
  const navigate = useNavigate();
  return (
    <Navbar id="home" fixed="top" expand="md" className="px-4">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="basic-nav-dropdown">
        <Nav>
          <Nav.Link
            href={isHome ? "#home" : "/home"}
            onClick={() => {
              if (!isHome) {
                setIsHome(true);
                navigate("/home");
              }
            }}
          >
            Home
          </Nav.Link>
          {props.isHome ? (
            <>
              <Nav.Link href="#work">Work</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>{" "}
            </>
          ) : (
            ""
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
