import { useEffect, useState } from 'react';
import { Container, Card, ListGroup, Row, Col, Spinner } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/about.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <Container className="my-5">
      <h1 className="text-center display-6 fw-bold text-primary my-4">{data[0].value}</h1>
      <Row>
        <Col md={8} className="mx-auto">
          <Card className="mb-4 shadow-lg border-light">
            <Card.Header as="h5" className="bg-primary text-white text-center">
              Description
            </Card.Header>
            <Card.Body>
              <Card.Text>{data[1].value}</Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-4 shadow-lg border-light">
            <Card.Header as="h5" className="bg-primary text-white text-center">
              History
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {data[2].value.map((item) => (
                  <ListGroup.Item key={item.key} className="border-0">
                    <strong>{item.key.charAt(0).toUpperCase() + item.key.slice(1)}:</strong> {item.value}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>

          <Card className="mb-4 shadow-lg border-light">
            <Card.Header as="h5" className="bg-primary text-white text-center">
              Mission
            </Card.Header>
            <Card.Body>
              <Card.Text>{data[3].value}</Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-4 shadow-lg border-light">
            <Card.Header as="h5" className="bg-primary text-white text-center">
              Unique Features
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {data[4].value.map((feature) => (
                  <ListGroup.Item key={feature.feature} className="border-0">
                    <strong>{feature.feature}:</strong> {feature.description}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>

          <Card className="mb-4 shadow-lg border-light">
            <Card.Header as="h5" className="bg-primary text-white text-center">
              Location
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <FaMapMarkerAlt /> <strong>Address:</strong> {data[5].value.address} <br />
                <FaPhone /> <strong>Phone:</strong> {data[5].value.contact.phone} <br />
                <FaEnvelope /> <strong>Email:</strong> {data[5].value.contact.email}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
