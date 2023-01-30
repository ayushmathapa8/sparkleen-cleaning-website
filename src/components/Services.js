import React from "react";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import { Layout } from "./Layout";

export const Services = () => {
  return (
    <Layout>
      <div id="projects" class="projects py-3">
        <div class="title">
          <span>Our Services</span>
        </div>

        <div class="container">
          <div class="row  py-5 mt-5">
            <div class="col-md mb-3">
              <img src={p1} alt="portfolio project" width="100%" />
            </div>
            <div class="col-md">
              <h2>Office Cleaning</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                cum rem blanditiis voluptates sit quae veritatis enim eum, ullam
                incidunt nemo deserunt tempore esse nostrum quibusdam quidem
                nesciunt rerum vel.
              </p>
            </div>
          </div>

          <div class="row  py-5 mt-5">
            <div class="col-md">
              <img src={p2} alt="portfolio project" width="100%" />
            </div>
            <div class="col-md">
              <h2>Retailer Cleaning</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                cum rem blanditiis voluptates sit quae veritatis enim eum, ullam
                incidunt nemo deserunt tempore esse nostrum quibusdam quidem
                nesciunt rerum vel.
              </p>
            </div>
          </div>
          <div class="row py-5 mt-5">
            <div class="col-md order-md-2 mb-3">
              <img src={p3} alt="portfolio project" width="100%" />
            </div>
            <div class="col-md">
              <h2>Covid Cleaning</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                cum rem blanditiis voluptates sit quae veritatis enim eum, ullam
                incidunt nemo deserunt tempore esse nostrum quibusdam quidem
                nesciunt rerum vel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
