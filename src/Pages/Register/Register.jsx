import { Form, Button, Row, Col, Container,} from 'react-bootstrap';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaCalendarAlt } from 'react-icons/fa';

const Register = () => {
    return (
        <Container className='my-5 '>
            <Row className='justify-content-center'>
                <Col md={8}>
                    <div className='text-center  text-primary py-3'>
                        <h2 className='display-6 fw-bold'>Register for a New Account</h2>
                        <p>Please fill out the form below to create your account.</p>
                        <hr />
                    </div>

                    <Form>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group controlId="formFirstName">
                                    <Form.Label>
                                        <FaUser /> First Name
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your first name"
                                        className='border-primary'
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formLastName">
                                    <Form.Label>
                                        <FaUser /> Last Name
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your last name"
                                        className='border-primary'
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>
                                        <FaEnvelope /> Email Address
                                    </Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        className='border-primary'
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formPhone">
                                    <Form.Label>
                                        <FaPhone /> Phone Number
                                    </Form.Label>
                                    <Form.Control
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className='border-primary'
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>
                                        <FaLock /> Password
                                    </Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter your password"
                                        className='border-primary'
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formConfirmPassword">
                                    <Form.Label>
                                        <FaLock /> Confirm Password
                                    </Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Confirm your password"
                                        className='border-primary'
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group controlId="formDob">
                                    <Form.Label>
                                        <FaCalendarAlt /> Date of Birth
                                    </Form.Label>
                                    <Form.Control type="date" className='border-primary' />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formGender">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Control as="select" className='border-primary'>
                                        <option>Choose...</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={12}>
                                <Form.Group controlId="formAddress">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your address"
                                        className='border-primary'
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group controlId="formTerms" className="mb-3">
                            <Form.Check
                                type="checkbox"
                                label="I agree to the terms and conditions"
                            />
                        </Form.Group>

                        <div className='d-flex justify-content-center'>
                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
