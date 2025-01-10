import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send an Email");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const mailtoLink = `mailto:mohantyshyamsundar10@gmail.com?subject=Contact Form Submission&body=First Name: ${formDetails.firstName}%0D%0ALast Name: ${formDetails.lastName}%0D%0AEmail: ${formDetails.email}%0D%0APhone: ${formDetails.phone}%0D%0AMessage: ${formDetails.message}`;

    window.location.href = mailtoLink;

    setButtonText("Send");
    setFormDetails(formInitialDetails);
    setStatus({ success: true, message: "Message sent successfully" });
    setStatus({ success: false, message: "Error while sending message" });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated " : ""}>
              <h2>Get In Touch</h2>
              <form className="cform" onSubmit={handleSubmit}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Phone No."
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                    />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea
                      rows="6"
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                    ></textarea>
                    {/* {status.message && (
                      <Row>
                        <p
                          className={
                            status.success === false ? "danger" : "success"
                          }
                        >
                          {status.message}
                        </p>
                      </Row>
                    )} */}
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};
