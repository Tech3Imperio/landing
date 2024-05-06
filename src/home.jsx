import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { imageLogo as image } from "./components/Assets/images";

function Home() {
  return (
    <>
      <div className="App">
        <div>
          <div className="white-gradient" />
          <Header />
          <Hero />
        </div>
        <Residencies />
        <Value />
        <Companies />
        <Contact />
        {/* <GetStarted /> */}
        <FloatingWhatsApp
          phoneNumber="8591953385"
          accountName="Imperio Railing"
          messageDelay={2}
          darkMode={true}
          avatar={image[2]}
          loading="lazy"
          statusMessage="Online"
          chatMessage="Hello there! How can I assist you?"
        />
        <Footer />
      </div>
    </>
  );
}

export default Home;
