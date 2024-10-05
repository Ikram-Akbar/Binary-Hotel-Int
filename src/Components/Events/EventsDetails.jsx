import { Link, useLoaderData, useParams } from "react-router-dom";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import { FaCalendarAlt, FaMapMarkerAlt, FaInfoCircle, FaClock, FaDollarSign, FaUserAlt,FaHome } from "react-icons/fa";

// Reusable component for rendering event details with badge
// eslint-disable-next-line react/prop-types
const EventDetail = ({ icon: Icon, label, value }) => (
    <Alert variant="light" className="d-flex align-items-center justify-content-between border border-primary rounded shadow-sm">
        <span>
            <Icon className="me-2 text-primary" /> <strong>{label}:</strong> {value}
        </span>
        
    </Alert>
);

const EventsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const eventData = data.find((d) => d.id === intId);

    if (!eventData) {
        return <p>Event not found.</p>;
    }

    return (
        <Container className="my-5">
            <Row>
                <Col className="text-center my-4">
                    <h1 className="text-primary display-4 fw-bold">{eventData.name}</h1>
                    <p className="lead text-muted">
                        Discover the details for this exciting event below!
                    </p>
                </Col>
            </Row>
            <Row className="bg-light rounded shadow-sm py-5 px-4 border border-primary">
                <Col md={4} className="mb-4">
                    <EventDetail icon={FaCalendarAlt} label="Date" value={eventData.date} />
                    <EventDetail icon={FaClock} label="Time" value={eventData.time} />
                    <EventDetail icon={FaMapMarkerAlt} label="Location" value={eventData.location} />
                    <EventDetail icon={FaDollarSign} label="Price" value={eventData.price} />
                    <EventDetail icon={FaUserAlt} label="Age Restriction" value={eventData.ageRestriction} />
                </Col>
                <Col md={8} className="mb-4">
                    <Alert variant="primary" className="shadow-sm p-4">
                        <FaInfoCircle className="me-2" /> <strong>Description:</strong> {eventData.description}
                    </Alert>
                    <div className="text-center mt-4">
                        <Button variant="primary"  as={Link} to="/">
                            <FaHome className="me-2" /> Go to Home
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default EventsDetails;
