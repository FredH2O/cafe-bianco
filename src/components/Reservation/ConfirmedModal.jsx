import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ConfirmedModal({
  show,
  handleClose,
  name,
  time,
  specialRequest,
}) {
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Booking Confirmed!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your booking @ <strong>{time}</strong> has been confirmed!
          <br />
          See you soon {name} !<br />
          {specialRequest && <> We will try to fulfill your special request!</>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
