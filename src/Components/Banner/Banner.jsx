import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div
            style={{
                backgroundImage: "url('https://i.ibb.co/DrCnVn9/pexels-photo-338504.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                color: 'white',
            }}
        >
            <div
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.63)',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    zIndex: 1,
                }}
            ></div>
            <Container
                style={{
                    zIndex: 2,
                    position: 'relative',
                    textAlign: 'center',
                }}
            >
                <Row className="justify-content-center">
                    <Col md={8}>
                        <h1 className="display-4 fw-bold">Welcome to Binary Hotel</h1>
                        <p className="lead mb-4">
                            Experience the luxury and comfort you&apos;ve always dreamed of.
                        </p>
                        <Button
                            className="px-4 py-2 fw-bold"
                            variant="light"
                            as={Link}
                            to="/booking"
                        >
                            Book Now!
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;
