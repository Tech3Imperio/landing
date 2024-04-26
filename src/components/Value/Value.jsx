import { LuShoppingCart } from "react-icons/lu";
import { RiLightbulbLine } from "react-icons/ri";
import { IoConstructSharp, IoOptionsSharp } from "react-icons/io5";
import { HiOutlineBadgeCheck, HiPhotograph } from "react-icons/hi";
import "./Value.css";
import { imageValue as image } from "../Assets/images";

const Value = () => {
  var valueData = [
    [
      <LuShoppingCart />,
      {
        header: "Product Showcase",
        content:
          "An interactive gallery displaying different types of railing systems offered by Imperio, with a focus on aluminum and stainless steel railing products.",
      },
    ],
    [
      <RiLightbulbLine />,
      {
        header: "LED Railing Highlight",
        content:
          "A dedicated section highlighting the features and benefits of LED Glass Railings and LED Handrails.",
      },
    ],
    [
      <IoOptionsSharp />,
      {
        header: "Customisation Options",
        content:
          "We customise our railing systems to suit your specific needs and preferences.",
      },
    ],
    [
      <IoConstructSharp />,
      {
        header: "Project Management",
        content:
          "We provide comprehensive project management from drawings to installation, reassuring customers about the ease of implementation.",
      },
    ],
    [
      <HiOutlineBadgeCheck />,
      {
        header: "Quality Assurance",
        content:
          "Information on the high-quality materials and manufacturing standards used in Imperio's railing systems, along with any certifications or warranties offered.",
      },
    ],
    [
      <HiPhotograph />,
      {
        header: "Project Portfolio",
        content:
          "A showcase of past projects featuring Imperio's railing systems, demonstrating their versatility and aesthetic appeal in various settings such as Billionaire homes, 5 star hotels and buildings.",
      },
    ],
  ];

  return (
    <>
      <section className="v-wrapper" id="values">
        <div className="paddings innerWidth flexCenter v-container">
          {/* Left Side */}
          <div className="v-left">
            <div className="image-container">
              <img src={image[0]} alt="tempered glass handrail" />
            </div>
          </div>

          {/* Right side */}
          <div className="flexColStart v-right">
            <span className="primaryText">
              Discover the Superiority of Imperio
            </span>

            <div className="value-container">
              {valueData.map((item, index) => {
                return (
                  <div key={index} className="flexRowStart value-provider">
                    <div className="flexCenter value-icon">{item[0]}</div>
                    <div className="flexColStart value-right">
                      <span className="valuePrimary">{item[1].header}</span>
                      <span className="secondaryText">{item[1].content}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flexStart">
              <button className="button value-btn">
                <a href="#contact">Contact Us</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Value;
