import React from "react";
import {
  FaFacebook as Facebook,
  FaXTwitter as Twitter,
  FaInstagram as Instagram,
  FaYoutube as Youtube,
  FaLinkedin as Linkedin,
  FaQuora as Quora,
  FaPinterestP as Pinterest,
} from "react-icons/fa6";
import { imageLogo as image } from "../Assets/images";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* Left side */}

        <div className="flexColStart f-left">
          <img src={image[0]} alt="aluminum railing company logo" width={120} />
          <div className="secondaryText">
            When innovation meets timeless elegance
            <a href="https://www.imperiorailing.com">www.imperiorailing.com</a>
          </div>
        </div>

        <div className="flexColStart f-right">
          <div className="flexCenter f-menu">
            <span className="ficons">
              <a
                href="https://www.facebook.com/imperiorailingsystem/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
            </span>
            <span className="ficons">
              <a
                href="https://twitter.com/ImperioRailing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
            </span>
            <span className="ficons">
              <a
                href="https://www.instagram.com/imperio.railings/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            </span>
            <span className="ficons">
              <a
                href="https://www.youtube.com/channel/UCfc7xvEAq7E1KPy6xFA_msg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube />
              </a>
            </span>
            <span className="ficons">
              <a
                href="https://www.linkedin.com/company/imperiorailingsystems/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
            </span>
            <span className="ficons">
              <a
                href="https://in.pinterest.com/ImperioRailing/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Pinterest />
              </a>
            </span>
            <span className="ficons">
              <a
                href="https://www.quora.com/profile/Imperio-Railing-Systems"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Quora />
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
