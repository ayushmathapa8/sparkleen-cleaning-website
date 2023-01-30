import React from "react";
import { Accordion } from "react-bootstrap";
import { Layout } from "./Layout";

export const Faq = () => {
  return (
    <Layout>
      <section id="skills" class="container py-4">
        <div class="row">
          <div class="col">
            {/* <!-- title --> */}
            <div class="title">
              <span>Frequently Asked Questions</span>
            </div>

            {/* <!-- icons --> */}
            <div class="">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    1. Do you offer a same-day commercial cleaning service?
                  </Accordion.Header>
                  <Accordion.Body>
                    A same-day cleaning service as per bookings depends on the
                    availability of our cleaning staff. We try our best to be
                    prompt in providing you services at your chosen date.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    2. Do you background verify all your cleaners?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, every single Sparkleen Professional undergoes a
                    pre-employment verification process and rigorous training
                    before they are eligible to perform our services.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    3. Do you background verify all your cleaners?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, every single Sparkleen Professional undergoes a
                    pre-employment verification process and rigorous training
                    before they are eligible to perform our services.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    4. Do you background verify all your cleaners?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, every single Sparkleen Professional undergoes a
                    pre-employment verification process and rigorous training
                    before they are eligible to perform our services.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
