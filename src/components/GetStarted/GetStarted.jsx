import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <>
      <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
          <div className="flexColCenter inner-container">
            <span className="primaryText">Know More about Homyz</span>
            <span className="secondaryText">
              Know more about our super attractive prices <br />
              Find Your choice soon
            </span>
            <button className="button">
              <a href="http://www.imperiorailing.com/" target="_blank">
                Know More
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStarted;
