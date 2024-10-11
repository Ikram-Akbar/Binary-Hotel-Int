import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AdminFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light text-center py-3">
      <Container>
        <Row>
          <Col>
            <p className="mb-0">
              System designed by Ikram Akbar &copy; {currentYear}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default AdminFooter;
