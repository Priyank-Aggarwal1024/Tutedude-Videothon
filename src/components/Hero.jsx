import React from "react";
import "../styles/Hero.css";
import heroImg from "../assets/hero-img.svg";
import Calendar from "../assets/Calendar.svg";
import Global from "../assets/Global.svg";
import people from "../assets/people.svg";
function Hero({ navigateRegister }) {
  return (
    <section className="hero-section">
      <div className="hero-blur-shadow"></div>
      <div className="hero-left">
        <div className="her-lef-join">An IIT Delhi alumni inititative</div>
        <div className="hero-heading">
          <span className="hero-heading-top">Edit like a Pro</span>
          <span className="hero-heading-top hero-heading-top-500">
            {" "}
            and win
          </span>
          <span className="hero-heading-bottom"> ₹8000 cash</span>
          <span className="hero-heading-top hero-heading-top-500">
            {" "}
            in Videothon
          </span>
        </div>
        <div className="her-lef-middle">
          <div className="hlm-div">
            <div className="hlm-div-icon">
              <img src={Global} alt="Global Icon" />
            </div>
            <div className="hlm-div-title">Mode:</div>
            <div className="hlm-div-cont">Online</div>
          </div>
          <div className="hlm-div">
            <div className="hlm-div-icon">
              <img src={Calendar} alt="Calendar Icon" />
            </div>
            <div className="hlm-div-title">Date: </div>
            <div className="hlm-div-cont">30 August to 31st August</div>
          </div>
          <div className="hlm-div">
            <div className="hlm-div-icon">
              <img src={people} alt="People Icon" />
            </div>
            <div className="hlm-div-title">Participation type: </div>
            <div className="hlm-div-cont">Solo</div>
          </div>
        </div>
        <div
          className="her-lef-bottom button-animation-parent"
          onClick={navigateRegister}
        >
          Register Now for Free!
          <div className="button-animation-div"></div>
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImg} alt="Hero Image" />
      </div>
    </section>
  );
}

export default Hero;
