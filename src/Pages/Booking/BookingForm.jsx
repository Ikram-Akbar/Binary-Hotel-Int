import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCreditCard,
  FaBed,
  FaCalendarAlt,
  FaClipboardList,
} from "react-icons/fa";

const BookingForm = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <div className="p-4">
            <Alert variant="primary" className="text-center display-5 text-primary">
              <h2 className="text-center fw-bold">Reserve Your Room</h2>
              <p className="lead text-muted">Please fill out the form below to secure your stay with us. We look forward to welcoming you!</p>
            </Alert>
            <Form>
              <Row className="mb-4">
                <Col md={6} className="mb-3">
                  <Form.Group controlId="formDestination">
                    <Form.Label>
                      <FaClipboardList /> Destination
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter destination"
                      className="border-primary"
                    />
                  </Form.Group>
                </Col>
                <Col md={3} className="mb-3">
                  <Form.Group controlId="formCheckIn">
                    <Form.Label>
                      <FaCalendarAlt /> Check-in Date
                    </Form.Label>
                    <Form.Control type="date" className="border-primary" />
                  </Form.Group>
                </Col>
                <Col md={3} className="mb-3">
                  <Form.Group controlId="formCheckOut">
                    <Form.Label>
                      <FaCalendarAlt /> Check-out Date
                    </Form.Label>
                    <Form.Control type="date" className="border-primary" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col md={4} className="mb-3">
                  <Form.Group controlId="formGuests">
                    <Form.Label>
                      <FaUser /> Number of Guests
                    </Form.Label>
                    <Form.Control as="select" className="border-primary">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col md={4} className="mb-3">
                  <Form.Group controlId="formRoomType">
                    <Form.Label>
                      <FaBed /> Room Type
                    </Form.Label>
                    <Form.Control as="select" className="border-primary">
                      <option>Single Room</option>
                      <option>Double Room</option>
                      <option>Suite</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col md={4} className="mb-3">
                  <Form.Group controlId="formSpecialRequests">
                    <Form.Label>Special Requests</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Any additional requests"
                      className="border-primary"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col md={6} className="mb-3">
                  <Form.Group controlId="formName">
                    <Form.Label>
                      <FaUser /> Full Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      className="border-primary"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group controlId="formEmail">
                    <Form.Label>
                      <FaEnvelope /> Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      className="border-primary"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col md={6} className="mb-3">
                  <Form.Group controlId="formPhone">
                    <Form.Label>
                      <FaPhone /> Phone Number
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter your phone number"
                      className="border-primary"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group controlId="formPayment">
                    <Form.Label>
                      <FaCreditCard /> Payment Information
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Credit card details"
                      className="border-primary"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col md={6} className="mb-3">
                  <Form.Group controlId="formLoyaltyProgram">
                    <Form.Label>Loyalty Program Information</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Loyalty program ID"
                      className="border-primary"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group controlId="formPromoCode">
                    <Form.Label>Promotional Code</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter promo code"
                      className="border-primary"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col md={4} className="text-center">
                  <Button variant="primary" className="w-100">
                    Book Now
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingForm;
