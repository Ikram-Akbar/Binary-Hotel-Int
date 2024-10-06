import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Form, Button, Row, Col, Container, } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaCalendarAlt } from 'react-icons/fa';
import auth from '../../Firebase/firebase.config';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const { register_with_email_password } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleOnRegister = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData.entries());
        const { email, password, confirmPassword } = formValues;

        if (password !== confirmPassword) {
            toast.error("password are not match");
            return;
        }

        register_with_email_password(email, password)
            .then(() => {
                toast.success("user created successfully");
                navigate("/login");
                e.target.reset();
            })
            .catch((err) => {
                toast.error(err.message);
            })
    }

    return (
        <Container className='my-5 '>
            <Row className='justify-content-center'>
                <Col md={8}>
                    <div className='text-center  text-primary py-3'>
                        <h2 className='display-6 fw-bold'>Register for a New Account</h2>
                        <p>Please fill out the form below to create your account.</p>
                        <hr />
                    </div>

                    <Form onSubmit={handleOnRegister}>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group controlId="formFirstName">
                                    <Form.Label>
                                        <FaUser /> First Name
                                    </Form.Label>
                                    <Form.Control
                                        name='firstName'
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
                                        name='lastName'
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
                                        name='email'
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
                                        name='phoneNumber'
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
                                        name='password'
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
                                        name='confirmPassword'
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
                                    <Form.Control
                                        name='dateOfBirth'
                                        type="date"
                                        className='border-primary' />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formGender">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Control
                                        name='gender'
                                        as="select"
                                        className='border-primary'>
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
                                        name='address'
                                        type="text"
                                        placeholder="Enter your address"
                                        className='border-primary'
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group controlId="formTerms" className="mb-3">
                            <Form.Check
                                name='formCheck'
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
