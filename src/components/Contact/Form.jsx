import { toUpper } from "lodash";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  function handleSubmit(event) {
    event.preventDefault();
    handleShow();
  }

  function handleChange(event) {
    if (event.target.name === "name") {
      const nameValue = event.target.value;
      const capitalized =
        nameValue.charAt(0).toUpperCase() + nameValue.slice(1).toLowerCase();
      setFormData({ ...formData, [event.target.name]: capitalized });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="custom-form contact-form"
        role="form"
      >
        <div className="row">
          <div className="col-lg-6 col-12">
            <label htmlFor="name" className="form-label">
              Name <sup className="text-danger">*</sup>
            </label>

            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Jackson"
              required
              onChange={handleChange}
            />
          </div>

          <div className="col-lg-6 col-12">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>

            <input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              pattern="[^ @]*@[^ @]*"
              className="form-control"
              placeholder="Jack@gmail.com"
              required
            />
          </div>

          <div className="col-12">
            <label htmlFor="message" className="form-label">
              How can we help?
            </label>

            <textarea
              name="message"
              rows="4"
              className="form-control"
              id="message"
              placeholder="Message"
              required
            ></textarea>
          </div>
        </div>

        <div className="col-lg-5 col-12 mx-auto mt-3">
          <button type="submit" className="form-control">
            Send Message
          </button>
        </div>
      </form>

      {/* Modal message here */}

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Message sent!!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Hi {formData.name}!</h4>
          <p style={{ color: "black" }}>
            We have sent your message to our team and we'll get back to you as
            soon as possible!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
