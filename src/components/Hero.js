import React from "react";
import { Layout } from "./Layout";

export const Hero = () => {
  return (
    <Layout>
      <section className="hero">
        <div className="hero-info">
          <div className="title">Best Cleaning Service in Sydney</div>
          <hr />
          <p>
            We are team of expert who first priority is the customer's
            satisfaction when it come to commercial cleaning.
          </p>
        </div>
      </section>
    </Layout>
  );
};
