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
                    3. Do you have a cancellation policy?
                  </Accordion.Header>
                  <Accordion.Body>
                    We kindly ask each customer to give us at least 24 hours
                    notice. This way we can organise our day accordingly.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    4. Can I supply my own cleaning products?
                  </Accordion.Header>
                  <Accordion.Body>
                    You certainly can make a request for us to use a special
                    products that you may like. The only thing we will do is
                    make sure we have a full knowledge of the product so that we
                    know we will not be doing any sort of damage to your home or
                    business.
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
