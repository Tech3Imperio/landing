import React, { useState, useEffect } from "react";
import "./Companies.css";
import { imageCompanies as image } from "../Assets/images";

const Companies = () => {
  const [Width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  var anchorData = [
    [
      {
        link: "https://www.google.com/search?q=mukesh+ambani",
        src: image[0],
        title: "Mukesh Ambani",
      },
      {
        link: "https://www.google.com/search?q=rakesh+jhunjhunwala",
        src: image[1],
        title: "Rakesh Jhujhunwala",
      },
    ],
    [
      {
        link: "https://www.google.com/search?q=cyrus+mistry",
        src: image[2],
        title: "Cyrus Mistry",
      },
      {
        link: "https://www.google.com/search?q=salman+khan",
        src: image[3],
        title: "Salman Khan",
      },
    ],
    [
      {
        link: "https://www.google.com/search?q=Asha+Bhosle",
        src: image[4],
        title: "Asha Bhosle",
      },
      {
        link: "https://www.google.com/search?q=divyank+turakhia",
        src: image[5],
        title: "Divyank Turakhia",
      },
    ],
  ];

  const renderImage1 = () => {
    return anchorData.map((item, index) => (
      <div key={index}>
        <a href={item[0].link} target="_blank" rel="noreferrer">
          <img src={item[0].src} alt={item[0].title} title={item[0].title} />
        </a>
        <a href={item[1].link} target="_blank" rel="noreferrer">
          <img src={item[1].src} alt={item[1].title} title={item[1].title} />
        </a>
      </div>
    ));
  };
  const renderImage2 = () => {
    return anchorData.map((item, index) => {
      return item.map((data, position) => (
        <a key={position} href={data.link} target="_blank" rel="noreferrer">
          <img src={data.src} alt={data.title} title={data.title} />
        </a>
      ));
    });
  };

  return (
    <section className="c-wrapper" id="clients">
      <div className="demo">
        <div className="paddings innerWidth flexCenter partner-container">
          <span className="primaryText">Our Valued User</span>
          <div className="innerWidth flexCenter c-container">
            {Width < 1200 ? renderImage1() : renderImage2()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
