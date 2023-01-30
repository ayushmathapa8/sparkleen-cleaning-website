import React from "react";
import { Layout } from "./Layout";

export const Booking = () => {
  return (
    <Layout>
      <div id="contact" className="container contact rounded-5 p-3 ">
        <div class="title">
          <span>Contact Me</span>
        </div>

        {/* <!-- icons to links --> */}
        <div class="row mb-5">
          <div class="col fa-3x d-flex justify-content-between px-5">
            {/* <!-- <a href="tel:041234567"><i class="fa-solid fa-mobile"></i></a> --> */}
            <a href="mailto:your@email.com">
              <i class="fa-solid fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/prem-acharya/" target="_blank">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};
