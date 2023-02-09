import React, { useState } from "react";
import { Layout } from "./Layout";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import axios from "axios";

const bookingAPI = "http://localhost:8000/booking";

export const Booking = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { value, name } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault(); //prevent from browser to reload

    const response = await axios.post(bookingAPI, form);
    alert(response.data.message);
  };

  return (
    <Layout>
      <Container>
        <Row className="mt-5">
          <Col>
            <div class="title">
              <span>Service Booking Online</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="contact-form mt-5">
            <Form onSubmit={handleOnSubmit}>
              <p>
                Your cleaning solution is on call away. Our expert is wait to
                server you the best way possible. If you need any cleaning
                service, you can book though the online form below
              </p>
              <hr />
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>First Name *</Form.Label>
                <Form.Control
                  onChange={handleOnChange}
                  required
                  name="fName"
                  placeholder="Sam"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  onChange={handleOnChange}
                  name="lName"
                  placeholder="Smith"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone *</Form.Label>
                <Form.Control
                  onChange={handleOnChange}
                  required
                  name="phone"
                  type="number"
                  placeholder="04xxxxxxx"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address *</Form.Label>
                <Form.Control
                  onChange={handleOnChange}
                  required
                  name="email"
                  type="email"
                  placeholder="sam@email.com"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Date *</Form.Label>
                <Form.Control
                  name="date"
                  onChange={handleOnChange}
                  required
                  type="date"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Service *</Form.Label>

                <Form.Select name="service" required>
                  <option value=""> -- select --</option>
                  <option value="Office Cleaning">Office Cleaning</option>
                  <option value="Retailer Cleaning">Retailer Cleaning</option>
                  <option value="Covid Cleaning">Covid Cleaning</option>
                  <option value="Others">Others</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Message *</Form.Label>
                <Form.Control
                  name="message"
                  onChange={handleOnChange}
                  as={"textarea"}
                  rows="10"
                  cols={30}
                  placeholder="Leave us a detail messages"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  required
                  type="checkbox"
                  label="I allow to contact me via email or phone."
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Book Now
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
