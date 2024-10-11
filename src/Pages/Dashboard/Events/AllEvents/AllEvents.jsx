import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import EventTable from "../EventTable/EventTable";

const AllEvents = () => {
  const loadedEvents = useLoaderData();
  console.log(loadedEvents);

  return (
    <div>
      <h6>total events : {loadedEvents.length} </h6>
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Start Time</th>
                  <th>Location</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Age Restriction</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {loadedEvents.map((evnt, idx) => (
                  <EventTable key={evnt._id} evnt={evnt} idx={idx} />
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AllEvents;
