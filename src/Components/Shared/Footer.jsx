import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-5">
            <Container>
                <Row className="mb-5">
                    <Col md={4} className="text-center text-md-start mb-4 mb-md-0">
                        <h5 className="text-uppercase fw-bold mb-3">About Us</h5>
                        <p className="text-light">
                            At Binary Hotel, we deliver an unforgettable stay. From world-class services to luxurious accommodations, your comfort is our mission.
                        </p>
                    </Col>
                    <Col md={4} className="text-center mb-4 mb-md-0">
                        <h5 className="text-uppercase fw-bold mb-3">Quick Links</h5>
                        <Nav className="flex-column">
                            <Nav.Link as={Link} to="/" className="text-light mb-2">Home</Nav.Link>
                            <Nav.Link as={Link} to="/rooms" className="text-light mb-2">Rooms</Nav.Link>
                            <Nav.Link as={Link} to="/booking" className="text-light mb-2">Booking</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className="text-light mb-2">Contact Us</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={4} className="text-center text-md-end">
                        <h5 className="text-uppercase fw-bold mb-3">Follow Us</h5>
                        <div className="d-flex justify-content-center justify-content-md-end mb-3">
                            <FaFacebook className="mx-2 fs-2 text-light" style={{ cursor: 'pointer' }} />
                            <FaTwitter className="mx-2 fs-2 text-light" style={{ cursor: 'pointer' }} />
                            <FaInstagram className="mx-2 fs-2 text-light" style={{ cursor: 'pointer' }} />
                            <FaLinkedin className="mx-2 fs-2 text-light" style={{ cursor: 'pointer' }} />
                        </div>
                        <p className="text-light mb-1">Email: info@binaryhotelint.com</p>
                        <p className="text-light">Phone: +1 234 567 890</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <hr className="border-white mb-4" />
                        <p className="mb-0">© 2024 Binary Hotel Int. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
