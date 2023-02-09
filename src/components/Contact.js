import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Layout } from "./Layout";
import axios from "axios";

const contactAPI = "http://localhost:8000/contact";

export const Contact = () => {
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

    const response = await axios.post(contactAPI, form);
    alert(response.data.message);
  };
  return (
    <Layout>
      <Container>
        <Row>
          <Col md={6}>
            <div id="contact" className=" contact rounded-5 p-3 ">
              <div class="title">
                <span>Connect With Us</span>
              </div>

              {/* <!-- icons to links --> */}
              <div class=" mb-5">
                <div class=" fa-3x d-flex justify-content-between px-5">
                  {/* <!-- <a href="tel:041234567"><i class="fa-solid fa-mobile"></i></a> --> */}
                  <a href="mailto:your@email.com">
                    <i class="fa-solid fa-envelope"></i>
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="https://www.facebook.com/">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="https://www.twitter.com/">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} className="contact-form mt-5">
            <div class="title">
              <span>Contact Us</span>
            </div>
            <Form onSubmit={handleOnSubmit}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>First Name *</Form.Label>
                <Form.Control
                  onChange={handleOnChange}
                  required
                  name="fName"
                  placeholder="Same"
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
                  type="email"
                  name="email"
                  placeholder="sam@email.com"
                />
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
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
