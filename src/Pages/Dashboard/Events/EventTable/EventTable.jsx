import { Button } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const EventTable = ({ idx, evnt, onDelete }) => {
  const handleDelete = () => {
    fetch(`http://localhost:5001/events/${evnt._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Delete successful");
          onDelete(evnt._id);
        }
      })
      .catch((err) => toast.error("Error deleting the event")); // Adding error handling
  };

  return (
    <tr className="text-start">
      <td>{idx + 1}</td>
      <td>{evnt.name}</td>
      <td>{evnt.date}</td>
      <td>{evnt.time}</td>
      <td>{evnt.location}</td>
      <td>
        {evnt.price}
        <span className="fw-bold mx-2">$</span>
      </td>
      <td>{evnt.description}</td>
      <td>{evnt.ageRestriction}</td>
      <td>
        <Button as={Link} to={`/admin/updateEvents/${evnt._id}`} className="my-2" variant="primary" size="sm">
          Edit
        </Button>
        <Button
          onClick={handleDelete}
          variant="danger"
          size="sm"
          className="ms-2" 
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default EventTable;
