import React from "react";
import { Outlet } from "react-router-dom";
import VerticalNav from "../Shared/VerticalNav";
import { Col, Container, Row } from "react-bootstrap";
import AdminFooter from "../Shared/AdminFooter";
import { Toaster } from "react-hot-toast";

const AdminPage = () => {
  return (
    <Container fluid>
      <Row>
        {/* nav */}
        <Col md={2} className="vh-1000 bg-light ">
          <VerticalNav />
        </Col>
        {/* Main Content */}
        <Col md={10} className=" border-start mt-5 ">
          <Row>
            <Col>
              <Outlet />
              <Toaster position="bottom-right" reverseOrder={false} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPage;
