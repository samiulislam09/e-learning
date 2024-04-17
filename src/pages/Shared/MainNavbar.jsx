import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "./MainNavbar.css";

function MainNavbar() {
  return (
    // Main Navbar Component
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand>
          {/* Navbar logo */}
          <Link to="/">
            <h2 className="logo">E-learning</h2>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          {/* Nav list */}
          <Nav>
            <Nav.Link>
              <NavLink className="text-black text-decoration-none" to="/">
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="text-black text-decoration-none" to="/courses">
                Courses
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="text-black text-decoration-none" to="/about">
                About Us
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                className="text-black text-decoration-none"
                to="/instructors"
              >
                Instructors
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="text-black text-decoration-none" to="/notice">
                Notice
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="text-black text-decoration-none" to="/contact">
                Contact
              </NavLink>
            </Nav.Link>
          </Nav>

          {/* Topbar contact and social media on Small screen */}

          <div className="mainTopNav">
            {/* Contact Number & Email */}
            <div className="d-flex flex-wrap py-2 contact">
              <div className="d-flex align-items-center me-3">
                <FontAwesomeIcon
                  className="me-2"
                  icon={faPhone}
                ></FontAwesomeIcon>
                <p className="m-0">01315246121</p>
              </div>
              <span> | </span>
              <div className="d-flex align-items-center ms-3">
                <FontAwesomeIcon
                  className="me-2"
                  icon={faEnvelope}
                ></FontAwesomeIcon>
                <p className="m-0">samiulislamsawon09@gmail.com</p>
              </div>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
