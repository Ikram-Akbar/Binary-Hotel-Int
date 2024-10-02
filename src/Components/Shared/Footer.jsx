import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    const styles = {
        footer: {
            backgroundColor: '#f8f9fa',
            padding: '20px 0',
            marginTop: 'auto',
        },
        socialIcons: {
            marginTop: '10px',
        },
        icon: {
            margin: '0 10px',
            fontSize: '24px',
            color: '#007bff',
            cursor: 'pointer',
        },
        copyRight: {
            marginTop: '15px',
            fontSize: '14px',
            color: '#6c757d',
        },
    };
    return (
        <footer style={styles.footer}>
            <Container>
                <Row>
                    <Col md={4} className="text-center">
                        <h5>About Us</h5>
                        <p>Your comfort is our priority. We provide the best services for our guests.</p>
                    </Col>
                    <Col md={4} className="text-center">
                        <h5>Quick Links</h5>
                        <Nav className="flex-column">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/rooms">Rooms</Nav.Link>
                            <Nav.Link as={Link} to="/booking">Booking</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={4} className="text-center">
                        <h5>Contact Us</h5>
                        <p>Email: info@binaryhotelint.com</p>
                        <p>Phone: +1 234 567 890</p>
                        <div style={styles.socialIcons}>
                            <FaFacebook style={styles.icon} />
                            <FaTwitter style={styles.icon} />
                            <FaInstagram style={styles.icon} />
                            <FaLinkedin style={styles.icon} />
                        </div>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        <p style={styles.copyRight}>© 2024 Binary Hotel Int. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;