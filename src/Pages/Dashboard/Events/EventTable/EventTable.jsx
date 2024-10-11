import { Button } from "react-bootstrap";

const EventTable = ({ idx, evnt }) => {
  return (
    <tr>
      <td>{idx+1}</td>
      <td>{evnt.name}</td>
      <td>{evnt.date}</td>
      <td>{evnt.time}</td>
      <td>{evnt.location}</td>
      <td>{evnt.price}<span className="fw-bold mx-2">$</span></td>
      <td>{evnt.description}</td>
      <td>{evnt.ageRestriction}</td>
      <td>
        <Button className="my-2" variant="primary" size="sm">
          Edit
        </Button>
        <Button variant="danger" size="sm" className="ml-2">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default EventTable;
