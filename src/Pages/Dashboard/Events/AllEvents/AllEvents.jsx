import React, { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import EventTable from "../EventTable/EventTable";

const AllEvents = () => {
  const loadedEvents = useLoaderData();
  const [events, setEvents] = useState(loadedEvents);

  const onDelete = (id) => {
    const restEvents = events.filter((event) => event._id !== id);
    setEvents(restEvents);
  };

  return (
    <div>
      <Container>
        <Row>
          <h6>Total Events : {events.length} </h6>
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
                {events.map((evnt, idx) => (
                  <EventTable
                    key={evnt._id}
                    evnt={evnt}
                    onDelete={onDelete}
                    idx={idx}
                  />
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
