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

        {/* <img src={dark} alt="some img" width="100%" /> */}
        <div className="container mt-3">
          <div class="row">
            <div class="col-md-8">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                ipsam ad fuga, cumque qui fugit inventore vel deleniti minus
                tempore officiis eius blanditiis iusto perferendis officia odit
                atque asperiores soluta.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                ipsam ad fuga, cumque qui fugit inventore vel deleniti minus
                tempore officiis eius blanditiis iusto perferendis officia odit
                atque asperiores soluta.
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
