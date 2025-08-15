import "../styles/AboutHackathon.css";
import videothonImg from "../assets/videothon.svg";
function AboutHackathon() {
  return (
    <>
      <div className="about">
        <div className="about-left">
          <img src={videothonImg} alt="VideothonImg" />
        </div>
        <div className="about-right">
          <div className="about-right-top">
            <span>What Is </span>
            <span className="fw-700"> Videothon ?</span>
          </div>
          <div className="about-right-bottom">
            <b>Videothon</b> | <b>Video Editing Hackathon</b> is an online 24
            hour competition where. <br />
            <span className="about-right-bottom-badge">Video editors</span> will
            work on their Creative ideas and Edit crazy shit.
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutHackathon;
