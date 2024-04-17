import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer>
      <div style={{ background: "#021D3A", padding: "70px 0" }}>
        <Container>
          <Row>
            {/* Logo and First part */}
            <Col lg={3} md={6} sm={6} xs={12}>
              <h2 alt="logo" style={{ color: "white", width: '160px', height: '45px' }}>E-learning</h2>
              <p className="fs-6 text-white mt-3">
                E-learing is perfectly suitable for school, college and university
                website with online education system.
              </p>
            </Col>

            {/* Footer 2nd part */}
            <Col lg={3} md={6} sm={6} xs={12}>
              <h3  style={{fontFamily: 'Lato'}} className="fs-4 fw-bold text-white mb-4">Support</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none text-white">
                    <FontAwesomeIcon icon={faChevronRight} /> Online
                    Documentation
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none text-white">
                    <FontAwesomeIcon icon={faChevronRight} /> How to Start A
                    Course
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none text-white">
                    <FontAwesomeIcon icon={faChevronRight} /> Create A Support
                    Ticket
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none text-white">
                    <FontAwesomeIcon icon={faChevronRight} /> Our Refund Policy
                  </Link>
                </li>
              </ul>
            </Col>
            {/* Footer 3rd part */}
            <Col lg={3} md={6} sm={6} xs={12}>
              <h3  style={{fontFamily: 'Lato'}} className="fs-4 fw-bold text-white mb-4">Resources</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none text-white">
                    <FontAwesomeIcon icon={faChevronRight} /> Upcoming Events
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none text-white">
                    <FontAwesomeIcon icon={faChevronRight} /> Terms and
                    Conditions
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none text-white">
                    <FontAwesomeIcon icon={faChevronRight} /> Become A Teacher
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none text-white">
                    <FontAwesomeIcon icon={faChevronRight} /> Contact Us
                  </Link>
                </li>
              </ul>
            </Col>
            {/* Footer 3rd and Address part */}
            <Col lg={3} md={6} sm={6} xs={12}>
              <h3  style={{fontFamily: 'Lato'}} className="fs-4 fw-bold text-white mb-4">Our Address</h3>
              <p className="text-white">EDUMODO, Dhaka 1211</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ background: "#05274B", padding: "30px" }}>
        {/* Footer bottom side */}
        {/* Copyright & Social Media */}
        <Container>
          <Row>
            <Col md={6} sm={12}>
              <div>
                <p className="text-white fs-5">Copyright &copy; E-learning 2023</p>
              </div>
            </Col>
            
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
