import { Container, Row, Col, Form, Button, Alert, Card } from "react-bootstrap";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <Container className="my-5">
            <Row className="justify-content-center align-items-center">
                <Col md={6} lg={5} className="">
                    <Card className="mb-4 shadow-lg border-light">
                        <Card.Header as="h5" className="bg-primary text-white text-center">
                            Login
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="formBasicEmail" className="mb-3">
                                    <Form.Label>Email or Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter email or username" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword" className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group controlId="formBasicCheckbox" className="mb-3">
                                    <Form.Check type="checkbox" label="Remember Me" />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="w-100 mb-3" >
                                    Login
                                </Button>

                                <div className="text-center">
                                    <p className="mb-3">Or Login with</p>
                                    <Button variant="outline-dark" className="mx-2 mb-2" >
                                        <FaGoogle className="me-2" /> Google
                                    </Button>
                                    <Button variant="outline-dark" className="mx-2 mb-2" >
                                        <FaGithub className="me-2" /> GitHub
                                    </Button>
                                    <Button variant="outline-dark" className="mx-2 mb-2" >
                                        <FaFacebook className="me-2" /> Facebook
                                    </Button>
                                </div>

                                <div className="text-center mt-4">
                                    <a href="#forgot-password" className="text-decoration-none">Forgot Password?</a>
                                </div>
                                <div className="text-center mt-3">
                                    <Alert>
                                        <p >
                                            Don&apos;t have an account?{" "}
                                            <Link to="/register" className="text-decoration-none fw-bold">
                                                Register for a new account
                                            </Link>
                                        </p>
                                    </Alert>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPage;
<Card className="mb-4 shadow-lg border-light">
    <Card.Header as="h5" className="bg-primary text-white text-center">
        Login
    </Card.Header>
    <Card.Body>
        <Form>
            <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label>Email or Username</Form.Label>
                <Form.Control type="text" placeholder="Enter email or username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox" className="mb-3">
                <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mb-3" >
                Login
            </Button>

            <div className="text-center">
                <p className="mb-3">Or Login with</p>
                <Button variant="outline-dark" className="mx-2 mb-2" >
                    <FaGoogle className="me-2" /> Google
                </Button>
                <Button variant="outline-dark" className="mx-2 mb-2" >
                    <FaGithub className="me-2" /> GitHub
                </Button>
                <Button variant="outline-dark" className="mx-2 mb-2" >
                    <FaFacebook className="me-2" /> Facebook
                </Button>
            </div>

            <div className="text-center mt-4">
                <a href="#forgot-password" className="text-decoration-none">Forgot Password?</a>
            </div>
            <div className="text-center mt-3">
                <Alert>
                    <p >
                        Don&apos;t have an account?{" "}
                        <Link to="/register" className="text-decoration-none fw-bold">
                            Register for a new account
                        </Link>
                    </p>
                </Alert>
            </div>
        </Form>
    </Card.Body>
</Card>