import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { MdDriveFileRenameOutline } from "react-icons/md";
import {
  FaCalendarAlt,
  FaClock,
  FaEdit,
  FaDollarSign,
  FaExclamationTriangle,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const UpdateEvents = () => {
  const loadedFormData = useLoaderData();
  const {
    _id,
    name,
    price,
    time,
    date,
    description,
    ageRestriction,
    location,
  } = loadedFormData;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const time = form.time.value;
    const description = form.description.value;
    const price = form.price.value;
    const ageRestriction = form.ageRestriction.value;
    const location = form.location.value;

    const updateFormData = {
      name,
      date,
      time,
      description,
      price,
      ageRestriction,
      location,
    };

    console.log(updateFormData); 
   
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <h5 className="text-primary fw-semibold text-center">Update Event</h5>
        <hr />
        <Col md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>
                <MdDriveFileRenameOutline /> Event Name
              </Form.Label>
              <Form.Control
                defaultValue={name}
                type="text"
                name="name"
                required
              />
            </Form.Group>

            <Form.Group controlId="formDate">
              <Form.Label>
                <FaCalendarAlt /> Date
              </Form.Label>
              <Form.Control
                defaultValue={date}
                type="date"
                name="date"
                required
              />
            </Form.Group>

            <Form.Group controlId="formTime">
              <Form.Label>
                <FaClock /> Time
              </Form.Label>
              <Form.Control
                defaultValue={time}
                type="time"
                name="time"
                required
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>
                <FaEdit /> Description
              </Form.Label>
              <Form.Control
                defaultValue={description}
                as="textarea"
                name="description"
                required
              />
            </Form.Group>

            <Form.Group controlId="formPrice">
              <Form.Label>
                <FaDollarSign /> Price
              </Form.Label>
              <Form.Control
                defaultValue={price}
                type="number"
                name="price"
                required
              />
            </Form.Group>

            <Form.Group controlId="formAgeRestriction">
              <Form.Label>
                <FaExclamationTriangle /> Age Restriction
              </Form.Label>
              <Form.Control
                defaultValue={ageRestriction}
                type="text"
                name="ageRestriction"
                required
              />
            </Form.Group>

            <Form.Group controlId="formLocation">
              <Form.Label>
                <FaMapMarkerAlt /> Location
              </Form.Label>
              <Form.Control
                defaultValue={location}
                type="text"
                name="location"
                required
              />
            </Form.Group>

            <Button className="my-3" variant="primary" type="submit">
              Update Event
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UpdateEvents;
