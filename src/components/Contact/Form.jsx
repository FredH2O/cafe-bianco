import { useState, useRef } from "react";
import { Modal, Button } from "react-bootstrap";

export default function Form() {
  const inputName = useRef();
  const [formData, setFormData] = useState({
    personName: "",
    email: "",
    message: "",
  });
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  function handleSubmit(event) {
    event.preventDefault();
    handleShow();

    setTimeout(() => {
      setFormData({
        personName: "",
        email: "",
        message: "",
      });
      handleClose();
    }, 3500);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "personName") {
      const capitalized =
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      setFormData((prev) => ({ ...prev, personName: capitalized }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
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
              value={formData.personName}
              type="text"
              name="personName"
              id="name"
              className="form-control"
              placeholder="Jerry"
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
              value={formData.email}
              type="email"
              name="email"
              id="email"
              pattern="[^ @]*@[^ @]*"
              className="form-control"
              placeholder="Jillian@gmail.com"
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
              placeholder="Tell us what's in your mind !"
              required
              maxLength="250"
              value={formData.message}
              style={{ resize: "none" }}
              onChange={handleChange}
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
          <h4>Hi {formData.personName}!</h4>
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
