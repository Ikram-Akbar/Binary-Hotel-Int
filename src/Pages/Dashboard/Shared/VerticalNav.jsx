import { Navbar,Nav,Accordion,} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaPlus,
  FaHouseUser,
  FaListAlt,
  FaPhoneAlt,
  FaBox,
} from "react-icons/fa";

const VerticalNav = () => {
  const brandName = " Binary-Hotel-INT";
  return (
    <Navbar bg="" expand="lg" className="d-flex flex-column vh-100 ">
      <Navbar.Brand className="mb-4 fw-bold text-primary">
        {brandName}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/" className="d-flex align-items-center">
            <FaHome className="me-2" />
            Go to web Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/admin/"
            className="d-flex align-items-center"
          >
            <FaHouseUser className="me-2" /> Admin Home
          </Nav.Link>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header> All Events</Accordion.Header>
              <Accordion.Body>
                <Nav.Link
                  as={Link}
                  to="/admin/allEvents"
                  className="d-flex align-items-center"
                >
                  <FaBox className="me-2" /> All Events
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/admin/addEvents"
                  className="d-flex align-items-center"
                >
                  <FaPlus className="me-2" /> Add a Events
                </Nav.Link>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Nav.Link
            as={Link}
            to="/admin/addSpecialOffers"
            className="d-flex align-items-center"
          >
            <FaPlus className="me-2" /> Add a Special Offer
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/services"
            className="d-flex align-items-center"
          >
            <FaListAlt className="me-2" /> Services
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/contact"
            className="d-flex align-items-center"
          >
            <FaPhoneAlt className="me-2" /> Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default VerticalNav;
