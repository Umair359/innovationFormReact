import React from "react";

const Home = () => {
  return (
    <>
      <div class="home">
        <div class="home-left">
          <div>
            <h3>ESSENTIALS FOR ENTERPRENEURS &INNOVATORS</h3>
            <p>
              Each month the INNOVATORS FORUM welcomes local innovators and
              experts to consider the many aspects of starting, scaling, and
              maintaining new, innovative businesses. 
            </p>
          </div>
        </div>
        <div class="home-right">
          <div>
            <h2>2024</h2>
            <h3>INNOVATORS CHALLENGE</h3>
            <p>
              The Fort Worth Innovators Forum is proud to announce the first
              annual Innovation Competition will be in 2024 held in
              collaboration with the City of Fort Worth Economic Development
              Department and TechFW.
            </p>
            <img src="./images/challenge.png" alt="challenge.png" />
          </div>
        </div>
      </div>
      <div class="about">
        <div class="about-left">
          <h3>
            Beyond the Code: Embracing AI in the New Era of Business and Career
            Innovation
          </h3>
          <div>
            <img src="./images/profile1.png" alt="profile1.png" />
            <p>Walter Storm CEO Aspen Insights</p>
          </div>
          <div>
            <h3>Jan. 12, 2024</h3>
            <p>RSVP/DETAILS</p>
          </div>
        </div>
        <div class="about-middle">
          <h3>What Investors Expect from Entrepreneurs</h3>
          <div>
            <img src="./images/profile2.png" alt="profile2.png" />
            <p>Vartan Indjeian CFO, SVLC</p>
          </div>
          <div>
            <h3>Feb. 9, 2024</h3>
            <p>RSVP/DETAILS</p>
          </div>
        </div>
        <div class="about-right">
          <h3>The future of intermodal and supply chain sustainability</h3>
          <div>
            <img src="./images/profile3.png" alt="profile3.png" />
            <p>Jon Gabriel Vice President, BNSF</p>
          </div>
          <div>
            <h3>Mar. 9 2024 12-1 PM</h3>
            <p>RSVP/DETAILS</p>
          </div>
        </div>
      </div>

      <div class="footer">
        <h3>FWI Local Partners</h3>
        <img src="/images/company.png" alt="company.png" />
      </div>
    </>
  );
};

export default Home;
