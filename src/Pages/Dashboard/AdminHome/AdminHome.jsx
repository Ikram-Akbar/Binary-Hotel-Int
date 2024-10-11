import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Table,
  Button,
  Card,
  Form,
  ProgressBar,
} from "react-bootstrap";

const AdminHome = () => {
  return (
    <Container fluid>


      {/* Main Content */}
      <Row>
        <Col md={3} className=" sidebar">
          <Card>
            <Card.Header>Upcoming Check-ins</Card.Header>
            <Card.Body>
              <p>Room 101 - John Doe</p>
              <p>Room 202 - Jane Smith</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={9}>
          {/* Dashboard Section */}
          <section id="dashboard">
           
            <Row>
              <Col md={4}>
                <Card>
                  <Card.Header>Total Bookings</Card.Header>
                  <Card.Body>
                    <h4>128</h4>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Header>Occupancy Rate</Card.Header>
                  <Card.Body>
                    <h4>75%</h4>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Header>Total Revenue</Card.Header>
                  <Card.Body>
                    <h4>$12,500</h4>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>

          {/* Rooms Section */}
          <section id="rooms">
            <h2>Rooms Management</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Room ID</th>
                  <th>Room Type</th>
                  <th>Occupancy</th>
                  <th>Status</th>
                  <th>Price per Night</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>101</td>
                  <td>Luxury Suite</td>
                  <td>Occupied</td>
                  <td>Available</td>
                  <td>$250</td>
                  <td>
                    <Button variant="primary" size="sm">
                      Edit
                    </Button>
                    <Button variant="danger" size="sm" className="ml-2">
                      Delete
                    </Button>
                  </td>
                </tr>
                {/* More rows */}
              </tbody>
            </Table>
          </section>

          {/* Payments Section */}
          <section id="payments">
            <h2>Payments Management</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Payment ID</th>
                  <th>Customer</th>
                  <th>Booking ID</th>
                  <th>Amount</th>
                  <th>Payment Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#98765</td>
                  <td>John Doe</td>
                  <td>#12345</td>
                  <td>$750</td>
                  <td>Completed</td>
                  <td>
                    <Button variant="info" size="sm">
                      View
                    </Button>
                  </td>
                </tr>
                {/* More rows */}
              </tbody>
            </Table>
          </section>

          {/* Employee Management */}
          <section id="employees">
            <h2>Employee Management</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Schedule</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#E001</td>
                  <td>Mark Wilson</td>
                  <td>Receptionist</td>
                  <td>8 AM - 5 PM</td>
                  <td>
                    <Button variant="primary" size="sm">
                      Edit
                    </Button>
                    <Button variant="danger" size="sm" className="ml-2">
                      Remove
                    </Button>
                  </td>
                </tr>
                {/* More rows */}
              </tbody>
            </Table>
          </section>

          {/* Notifications Section */}
          <section id="notifications">
            <h2>Notifications & Messages</h2>
            <Card>
              <Card.Header>Send Notification</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Send
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminHome;
