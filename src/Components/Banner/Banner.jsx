
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
  return (
    <Container className="search-form">
      <h2 className="search-title">Find Your Perfect Stay</h2>
      <Form>
        <Row>
          <Col md={4} className="mb-3">
            <Form.Group controlId="destination">
              <Form.Label className="input-label">Destination</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a destination"
                className="input-field"
              />
            </Form.Group>
          </Col>
          <Col md={4} className="mb-3">
            <Form.Group controlId="checkin">
              <Form.Label className="input-label">Check-in</Form.Label>
              <Form.Control
                type="date"
                className="input-field"
              />
            </Form.Group>
          </Col>
          <Col md={4} className="mb-3">
            <Form.Group controlId="checkout">
              <Form.Label className="input-label">Check-out</Form.Label>
              <Form.Control
                type="date"
                className="input-field"
              />
            </Form.Group>
          </Col>
        </Row>
        <Button className="search-button" type="submit">
          Search
        </Button>
      </Form>
    </Container>
  );
};

export default Banner;
