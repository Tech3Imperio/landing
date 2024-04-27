import React, { useState } from "react";
import "./Contact.css";
import data from "./cities.json";
import axios from "axios";
import { imageContact as image } from "../Assets/images";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState("");
  const [blank, setBlank] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchTermState, setSearchTermState] = useState("");
  const [searchTermCity, setSearchTermCity] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);

  const handleSearchStateChange = (e) => {
    setSearchTermState(e.target.value);
    setSelectedState("");
    setSelectedCity("");
    if (e.target.value === "") {
      setIsStateDropdownOpen(false);
    } else {
      setIsStateDropdownOpen(true);
    }
  };

  const handleSearchCityChange = (e) => {
    setSearchTermCity(e.target.value);
    setSelectedCity("");
    if (e.target.value === "") {
      setIsCityDropdownOpen(false);
    } else {
      setIsCityDropdownOpen(true);
    }
  };

  const handleStateSelect = (state) => {
    setSelectedState(state);
    setSearchTermState(state);
    setIsStateDropdownOpen(false);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setSearchTermCity(city);
    setIsCityDropdownOpen(false);
  };

  const filteredStates = data
    .map((item) => item[0])
    .filter((state) =>
      state.toLowerCase().includes(searchTermState.toLowerCase())
    );

  const filteredCities = selectedState
    ? data
        .find((item) => item[0] === selectedState)[1]
        .filter((city) =>
          city.toLowerCase().includes(searchTermCity.toLowerCase())
        )
    : [];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all input fields are valid before proceeding
    if (name && phone && email) {
      setIsLoading(true);

      const data = {
        Name: name,
        Email: email,
        Phone: phone,
        Quantity: quantity,
        State: selectedState,
        City: selectedCity,
      };
      const text = `Greetings Imperio Railing System,\nI am interested in acquiring more information and require some details. Kindly find my information below:\n\n==============================\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nQuantity: ${quantity}\nState: ${selectedState}\nCity:${selectedCity}\n==============================\n\nAnticipating your prompt response.\nBest regards,\n${name}`;

      axios
        .post(
          "https://sheet.best/api/sheets/e0ae998b-d709-46c0-aa00-a5a6eceee397",
          data
        )
        .then((response) => {
          console.log(response);
          setIsLoading(false);
          setName("");
          setEmail("");
          setPhone("");
          setQuantity("");
          setBlank("Thank You! We will reach out to you soon. ");

          // Delay the redirection after showing the message

          setTimeout(() => {
            window.open(
              `https://api.whatsapp.com/send/?phone=${8591953385}&text=${encodeURI(
                text
              )}&type=phone_number&app_absent=0`
            );
            window.location.assign("https://www.imperiorailing.com/"); // Replace with your desired URL
          }, 2000); // Change the delay time (in milliseconds) as needed
        })
        .catch((error) => {
          setIsLoading(false);
          console.error(error);
        });
    } else {
      // Show an error message if any of the input fields are empty
      setBlank("Please fill in all the required fields.");
    }
  };

  return (
    <>
      <section className="c-wrapper" id="contact">
        <div className="paddings innerWidth flexCenter c-container">
          {/* Left Side */}
          <div className="flexColStart c-left">
            <span className="primaryText">Get in Touch</span>
            <span className="secondaryText">
              Get free Consultation for the right type of railings for your
              needs. <br />
              Our team will get in touch with you soon.
            </span>

            <div className="flexCenter contactModes">
              <form
                className="flexColCenter form-container"
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <div className="form-up">
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                  <input
                    type="tel"
                    placeholder="Enter Your Phone"
                    required
                    pattern="[789]\d{9}"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    title="Please enter a valid Indian phone number (10 digits starting with 7, 8, or 9)."
                  />
                </div>
                <div className="form-middle">
                  <input
                    type="email"
                    placeholder="example@email.com"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <input
                    type="text"
                    placeholder="QTY Required in RFT"
                    onChange={(e) => setQuantity(e.target.value)}
                    value={quantity}
                  />
                </div>
                <div className="form-down">
                  <input
                    type="text"
                    value={searchTermState}
                    onChange={handleSearchStateChange}
                    placeholder="Enter your State"
                  />
                  {window.innerWidth < 500 ? (
                    <>
                      {isStateDropdownOpen && (
                        <div className="dropdown state">
                          {filteredStates.map((state, index) => (
                            <div
                              key={index}
                              onClick={() => handleStateSelect(state)}
                            >
                              {state}
                            </div>
                          ))}
                        </div>
                      )}
                      <input
                        type="text"
                        value={searchTermCity}
                        onChange={handleSearchCityChange}
                        placeholder="Enter your City"
                        disabled={!selectedState}
                      />
                    </>
                  ) : (
                    <>
                      <input
                        type="text"
                        value={searchTermCity}
                        onChange={handleSearchCityChange}
                        placeholder="Enter your City"
                        disabled={!selectedState}
                      />
                      {isStateDropdownOpen && (
                        <div className="dropdown state">
                          {filteredStates.map((state, index) => (
                            <div
                              key={index}
                              onClick={() => handleStateSelect(state)}
                            >
                              {state}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                  {isCityDropdownOpen && (
                    <div className="dropdown city">
                      {filteredCities.map((city, index) => (
                        <div key={index} onClick={() => handleCitySelect(city)}>
                          {city}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <button className="button contact-btn" type="submit">
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
                <span className="primaryText blankspan">{blank}</span>
              </form>
            </div>
          </div>

          {/* Right Side */}
          <div className="flexEnd c-right">
            <div className="image-container">
              <img src={image[0]} alt="frameless glass railing contact us" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
