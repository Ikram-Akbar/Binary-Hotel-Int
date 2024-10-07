import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FaEnvelope } from 'react-icons/fa';

const NewsLetter = () => {
    return (
        <Container fluid className="py-5 text-center" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
            <Row className="justify-content-center">
                <Col md={8}>
                    <h2 className="text-primary fw-bold mb-4">
                        Subscribe to Our Newsletter
                    </h2>
                    <p className="text-muted mb-4">
                        Stay updated with the latest offers, discounts, and events by subscribing to our newsletter. We promise to only send you relevant information!
                    </p>
                    <Form>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">
                                <FaEnvelope className="text-primary" />
                            </InputGroup.Text>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                aria-label="Email"
                                aria-describedby="basic-addon1"
                            />
                            <Button variant="primary" type="submit">
                                Subscribe
                            </Button>
                        </InputGroup>
                    </Form>
                    <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                        We value your privacy and will never share your email address.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default NewsLetter;
