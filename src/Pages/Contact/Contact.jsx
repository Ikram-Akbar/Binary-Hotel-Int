import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission logic here
    };

    return (
        <Container className="my-5">
            <div className="text-center mb-5">
                <h1 className="text-center  display-6 fw-bold text-primary">Contact Us</h1>
                <p className="lead text-muted">We are always hear from you </p>
            </div>
            <Row>
                <Col md={6}>
                    <Card className="mb-4 shadow-lg border-light">
                        <Card.Header as="h5" className="bg-primary text-white text-center">
                            Get in Touch
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        name="message"
                                        placeholder="Enter your message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="mt-3">
                                    Send Message
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="mb-4 shadow-lg border-light">
                        <Card.Header as="h5" className="bg-primary text-white text-center">
                            Contact Information
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center mb-3">
                                <FaMapMarkerAlt size={24} className="text-primary me-2" />
                                <div>
                                    <strong>Address:</strong>
                                    <p>123 Main St, City, Country</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <FaPhone size={24} className="text-primary me-2" />
                                <div>
                                    <strong>Phone:</strong>
                                    <p>(123) 456-7890</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <FaEnvelope size={24} className="text-primary me-2" />
                                <div>
                                    <strong>Email:</strong>
                                    <p>info@example.com</p>
                                </div>
                            </div>
                            <h6>Follow Us</h6>
                            <div className="d-flex">
                                <a href="https://facebook.com" className="text-primary me-3"><FaFacebook size={24} /></a>
                                <a href="https://twitter.com" className="text-primary me-3"><FaTwitter size={24} /></a>
                                <a href="https://instagram.com" className="text-primary"><FaInstagram size={24} /></a>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card className="shadow-lg border-light">
                        <Card.Header as="h5" className="bg-primary text-white text-center">
                            Our Location
                        </Card.Header>
                        <Card.Body>
                            <div style={{ height: '300px', overflow: 'hidden' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509282!2d144.95373631531592!3d-37.81720997975158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f1a45cf%3A0x4eeb71f6d6d05626!2sYour%20Location!5e0!3m2!1sen!2sau!4v1632839738374!5m2!1sen!2sau"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;
