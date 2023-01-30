import React from "react";
// import prem from "../assets/prem.png";
import { Layout } from "./Layout";

export const Hero = () => {
  return (
    <Layout>
      <section className="hero">
        <div className="hero-info">
          <div className="title">Best Cleaning Service in Sydney</div>
          <hr />
          <p>
            We are team of expert who first priority is the coustomer's
            satisfaction when it come to cleaning
          </p>
        </div>
      </section>
    </Layout>
  );
};
