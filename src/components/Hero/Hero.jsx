import React from "react";
import "./Hero.css";
import { imageHero as image } from "../Assets/images";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  const runningFeets = () => {
    const baseDate = new Date("01/1/2024");
    const currentDate = new Date();
    return Math.floor((currentDate - baseDate) / 86400000) * 121 + 400000;
  };

  const happyCustomers = () => {
    const baseDate = new Date("01/1/2024");
    const currentDate = new Date();

    let totalMonths =
      Math.floor((currentDate - baseDate) / 2592000000) * 3 + 2200;
    if (totalMonths % 2 === 0) {
      totalMonths += 1;
    }
    return totalMonths;
  };

  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Left Side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <motion.h1
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 5,
                type: "spring",
              }}
            >
              Less is More, <br />
              Enjoy a Seamless <br />
              Experience
            </motion.h1>
          </div>

          <div className="flexCenter search-bar">
            <button className="button">
              <a href="#contact">Contact Us</a>
            </button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp
                  start={300000}
                  end={runningFeets()}
                  duration={5}
                  className="hero-number"
                />
                <span>+</span>
              </span>
              <span className="secondaryText">Running Feet</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp
                  start={1500}
                  end={happyCustomers()}
                  duration={5}
                  className="hero-number"
                />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp
                  start={0}
                  end={47}
                  duration={5}
                  className="hero-number"
                />
                <span>+</span>
              </span>
              <span className="secondaryText">Cities</span>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="image-container"
            transition={{
              duration: 2,
              type: "spring",
            }}
          >
            <img src={image[1]} alt="Building with glassess railing" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
