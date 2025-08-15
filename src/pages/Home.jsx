import "../styles/Home.css";
import AboutHackathon from "../components/AboutHackathon";
import Benefits from "../components/Benefits";
import BuildProductType from "../components/BuildProductType";
import Certificate from "../components/Certificate";
import ClaimPrizes from "../components/ClaimPrizes";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import HackathonSchedule from "../components/HackathonSchedule";
import HackathonProcess from "../components/HackathonProcess";
import Hero from "../components/Hero";
import Join from "../components/Join";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PreviousHackathons from "../components/PreviousHackathons";
function Home() {
  const [scrollTop, setScrollTop] = useState(0);
  const navigate = useNavigate();
  const navigateRegister = () => {
    navigate("/register");
  };
  return (
    <div
      className="hackathon-home"
      onScroll={(e) => setScrollTop(e.target.scrollTop)}
    >
      <Navbar navigateRegister={navigateRegister} />
      <Hero navigateRegister={navigateRegister} />
      <div className="tutedude-videothon-marquee">
        <div className="tutedude-videothon-track">
          <div className="tutedude-videothon-dot"></div>
          <a href="#" className="tutedude-videothon-link">
            INDIA’S FIRST VIDEO EDITING HACKATHON
          </a>
          <div className="tutedude-videothon-dot"></div>
          <a href="#" className="tutedude-videothon-link">
            INDIA’S FIRST VIDEO EDITING HACKATHON
          </a>
          <div className="tutedude-videothon-dot"></div>
          <a href="#" className="tutedude-videothon-link">
            INDIA’S FIRST VIDEO EDITING HACKATHON
          </a>
          <div className="tutedude-videothon-dot"></div>
          <a href="#" className="tutedude-videothon-link">
            VIDEO EDITING HACKATHON
          </a>
          <div className="tutedude-videothon-dot"></div>
          <a href="#" className="tutedude-videothon-link">
            VIDEO EDITING HACKATHON
          </a>
          <div className="tutedude-videothon-dot"></div>

          <a href="#" className="tutedude-videothon-link">
            INDIA’S FIRST VIDEO EDITING HACKATHON
          </a>
          <div className="tutedude-videothon-dot"></div>
          <a href="#" className="tutedude-videothon-link">
            INDIA’S FIRST VIDEO EDITING HACKATHON
          </a>
          <div className="tutedude-videothon-dot"></div>
          <a href="#" className="tutedude-videothon-link">
            INDIA’S FIRST VIDEO EDITING HACKATHON
          </a>
          <div className="tutedude-videothon-dot"></div>
          <a href="#" className="tutedude-videothon-link">
            VIDEO EDITING HACKATHON
          </a>
          <div className="tutedude-videothon-dot"></div>
          <a href="#" className="tutedude-videothon-link">
            VIDEO EDITING HACKATHON
          </a>
        </div>
      </div>

      <AboutHackathon />
      <ClaimPrizes navigateRegister={navigateRegister} />
      <HackathonProcess />
      <HackathonSchedule />
      <BuildProductType />
      <Join />
      <Benefits />
      <Certificate />
      <PreviousHackathons />
      <Faq />
      <div className="bct">
        <div className="bct-top">
          <h2 className="bct-top-heading">Believe. Create. Transform.</h2>
          <div className="bct-para">
            <span>Together, we will not just witness the future,</span>
            <span className="fw-700"> we will create it.</span>
          </div>
        </div>
        <div className="bct-rff" onClick={navigateRegister}>
          Register for FREE{" "}
        </div>
      </div>
      <Footer />
      {scrollTop > 1000 && (
        <div className="hackathon-floater">
          <div className="hackathon-floater-left">Reserve your spot now!</div>
          <div className="hackathon-floater-right" onClick={navigateRegister}>
            <span>Register Now for FREE </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="14"
              viewBox="0 0 17 14"
              fill="none"
            >
              <path
                d="M0.171875 7.4H16.1719M16.1719 7.4L11.6436 1M16.1719 7.4L11.6436 13"
                stroke="white"
                strokeWidth="0.870873"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
