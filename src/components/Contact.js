import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact.svg";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    linkedin: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [error, SetError] = useState('');

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDetails),
      });
  
      console.log("Server status:", response.status);
      if (!response.ok) {
       console.log('Message not sent');
       if(response.status===400){
        console.log("All the fields are not filled");
       }
      }

      if(response.ok){
        setButtonText("Sent");
        setFormDetails(formInitialDetails);
        setStatus({ success: true, message: "Message sent successfully" });
      }

    } catch (error) {
      SetError('Error connecting to server');
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2>Let's Connect!</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) =>
                      onFormUpdate("firstName", e.target.value)
                    }
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) =>
                      onFormUpdate("lastName", e.target.value)
                    }
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.linkedin}
                    placeholder="LinkedIn"
                    onChange={(e) => onFormUpdate("linkedin", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                    {error && <p id="error">{error}</p>}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Contact;
