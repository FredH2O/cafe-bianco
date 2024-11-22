import { useEffect, useState } from "react";
import "./Reservation.css";
import { format, addDays } from "date-fns";
import ConfirmedModal from "./ConfirmedModal";

export default function Reservation() {
  const today = new Date();
  const minDate = format(addDays(today, 1), "yyyy-MM-dd");
  const maxDate = format(addDays(today, 7), "yyyy-MM-dd");
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    date: "",
    time: "",
    specialRequests: "",
  });

  useEffect(() => {
    if (submitted) {
      const timing = setTimeout(() => {
        setSubmitted(false);
      }, 5000);

      return () => clearInterval(timing);
    }
  }, [submitted]);

  const handleClose = () => {
    setSubmitted(false);
  };

  const handleDateChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!!", formData);
    setSubmitted(true);

    const formTimer = setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        tel: "",
        date: "",
        time: "",
        specialRequests: "",
      });
    }, 5000);

    return () => {
      clearTimeout(formTimer);
    };
  };

  return (
    <section className="section-padding section-reservation">
      <div className="reservation-form ">
        <h2>Meeting Room Reservation at Cafe Bianco</h2>

        <form onSubmit={handleSubmit}>
          {/*name*/}
          <div className="mt-4">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your full name."
              value={formData.name}
              onChange={handleChange}
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => {
                if (!e.target.value) {
                  e.target.placeholder = "Enter your name!";
                }
              }}
            ></input>
          </div>
          {/*email*/}
          <div className="mt-3">
            <label htmlFor="email">Email Address</label>
            <input
              value={formData.email}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => {
                if (!e.target.value) {
                  e.target.placeholder = "coolguy@example.ie";
                }
              }}
              required
            />
          </div>
          {/*phone*/}
          <div className="mt-3">
            <label htmlFor="tel">Phone Number</label>
            <input
              value={formData.tel}
              type="tel"
              id="tel"
              name="tel"
              placeholder="+353-861234567"
              required
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => {
                if (!e.target.value) {
                  e.target.placeholder = "(+353) 861234567";
                }
              }}
              onChange={handleChange}
            />
          </div>
          {/*reservation*/}
          <div className="mt-3">
            <label htmlFor="date">Reservation Date</label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={handleDateChange}
              min={minDate}
              max={maxDate}
              name="date"
              required
            />
          </div>
          {/*time*/}
          <div className="mt-3">
            <label htmlFor="time">Please pick a time.</label>
            <select
              id="time"
              value={formData.time}
              name="time"
              onChange={handleChange}
              required
            >
              <option value="">Pick a time slot.</option>
              <option value="8:00">8:00 AM</option>
              <option value="9:00">9:00 AM</option>
              <option value="10:00" disabled>
                10:00 AM
              </option>
              <option value="11:00">11:00 AM</option>
            </select>
          </div>
          {/*request*/}
          <div className="mt-3">
            <label htmlFor="textarea">Special Requests?!</label>
            <textarea
              rows="101"
              col="50"
              maxLength="250"
              id="specialRequests"
              name="specialRequests"
              placeholder=""
              onChange={handleChange}
              value={formData.specialRequests}
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => {
                if (!e.target.value) {
                  e.target.placeholder = "Bring more chairs!";
                }
              }}
            ></textarea>
          </div>
          {submitted && (
            <ConfirmedModal
              show={submitted}
              handleClose={handleClose}
              name={formData.name}
              email={formData.email}
              specialRequest={formData.specialRequests}
              time={formData.time}
            />
          )}
          <button className="mt-3" type="submit">
            Submit !
          </button>
        </form>
      </div>
    </section>
  );
}
