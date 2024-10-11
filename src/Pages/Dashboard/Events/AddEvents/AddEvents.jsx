import { useState } from "react";
import toast from "react-hot-toast";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaCalendarAlt, FaClock, FaEdit, FaDollarSign, FaExclamationTriangle, FaMapMarkerAlt } from "react-icons/fa";

const AddEvents = () => {
  const [formData, setFormData] = useState({ name: "", date: "", time: "", description: "", price: "", ageRestriction: "", location: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetch("http://localhost:5001/events", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged == true) {
          toast.success("Event added to database");
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <h5 className="text-primary fw-semibold text-center">Add an Event</h5>
        <hr />
        <Col md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>
                <MdDriveFileRenameOutline />
                Event Name
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDate">
              <Form.Label>
                <FaCalendarAlt /> Date
              </Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTime">
              <Form.Label>
                <FaClock /> Time
              </Form.Label>
              <Form.Control
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>
                <FaEdit /> Description
              </Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPrice">
              <Form.Label>
                <FaDollarSign /> Price
              </Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formAgeRestriction">
              <Form.Label>
                <FaExclamationTriangle /> Age Restriction
              </Form.Label>
              <Form.Control
                type="text"
                name="ageRestriction"
                value={formData.ageRestriction}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formLocation">
              <Form.Label>
                <FaMapMarkerAlt /> Location
              </Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button className="my-3" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddEvents;
