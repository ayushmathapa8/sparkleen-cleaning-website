import React from "react";
import { Layout } from "./Layout";
export const AboutMe = () => {
  return (
    <Layout>
      <section id="">
        <div class="title">
          <span>About Us</span>
        </div>
        <div className="about-hero"></div>

        <div className="container mt-3">
          <div class="row">
            <div class="col">
              <p>
                Established in 2022, Sparkleen Commercial Cleaning is a 100%
                Australian owned company specialising in cleaning services
                across a broad range of industries including office/commercial,
                aged care & retirement, education, childcare, retail, medical,
                industrial, sports and hospitality.
              </p>
              <p>
                We have built our business on the values of honesty, integrity
                and reliability, providing premium, and bespoke cleaning
                solutions to a range of small, medium and large businesses, all
                over Australia.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h4>Our Strength:</h4>
              <ul>
                <li>Office Cleaning</li>
                <li>Retailer Cleaning</li>
                <li>Covid Cleaning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
