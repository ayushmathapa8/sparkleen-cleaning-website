import React from "react";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import { Layout } from "./Layout";

export const Services = () => {
  return (
    <Layout>
      <div id="services" class="services py-3">
        <div class="title">
          <span>Our Services</span>
        </div>

        <div class="container">
          <div class="row   py-5 mt-5">
            <div class="col-md  mb-3">
              <img src={p1} alt="portfolio project" width="100%" />
            </div>
            <div class="col-md">
              <h2>Office Cleaning</h2>

              <p>
                Good office cleaning practices impacts employees in a positive
                way. Work becomes a place for inspiration and well-being. Happy
                staff members are not only more productive, they also have
                higher job satisfaction, take fewer sick days, avoid burn out
                and show increased loyalty to their employer.
              </p>

              <p>
                Happiness in the workplace happens for lots of different
                reasons. For some people, it happens when they’re achieving
                great things. For others, it happens when they’re staying back
                to help one another. For most, it happens when they’re feeling
                valued.
              </p>

              <p>
                What can’t be underestimated is the role that a clean, safe and
                hygienic environment plays in making people feel valued.
              </p>

              <p>
                Happy staff are more likely to give higher work performance, be
                proud of their clean workplace and stay longer thus reducing
                staff churn and recruitment costs in the business.
              </p>
            </div>
          </div>

          <div class="row  py-5 mt-5">
            <div class="col-md order-md-2">
              <img src={p2} alt="portfolio project" width="100%" />
            </div>
            <div class="col-md">
              <h2>Covid Cleaning</h2>
              <p>
                Our fogging disinfection service gives greater efficiency and
                coverage to reach difficult areas like ceilings, high walls and
                cupboards. This is an additional treatment to regular cleaning
                to ensure day-to-day maintenance of cross-contamination. Fogging
                cleaning uses extremely small droplets of disinfectant. These
                droplets settle under, on top of and on the sides of many
                objects and in inaccessible areas that couldn’t be reached with
                conventional cleaning methods. Fogging has been found to be
                effective against a wide range of bacteria, viruses, fungi and
                spores depending on the disinfectant used
              </p>
            </div>
          </div>
          <div class="row py-5 mt-5">
            <div class="col-md  mb-3">
              <img src={p3} alt="portfolio project" width="100%" />
            </div>
            <div class="col-md">
              <h2>Retailer Cleaning</h2>

              <p>
                Regardless of what you sell – clothes, health insurance, mobile
                phones, or power tools – the cleanliness of your store is
                fundamental to your overall brand reputation and your success!
              </p>
              <p>
                At Sparkleen Cleaning, we’ve been cleaning retail premises, both
                street front stores and small, medium and large shopping
                centres, for quite some time, and have been responsible for the
                maintenance of a large number of sites throughout Perth,
                Brisbane, Sydney, Melbourne, Adelaide and Auckland.
              </p>
              <p>
                Our comprehensive range of ancillary cleaning services,
                including window cleaning and floor and tile cleaning, lends
                itself perfectly to the retail cleaning requirements of shops
                who need to have their business shining in every way at all
                times in order to remain at the top of their game and have the
                edge over their competitors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
