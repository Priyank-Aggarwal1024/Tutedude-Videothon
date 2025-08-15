import {
  toolkit1,
  toolkit2,
  toolkit3,
  toolkit4,
  toolkit5,
  toolkit6,
  toolkit7,
  toolkit8,
} from "../assets";
import "../styles/Join.css";
function Join() {
  return (
    <>
      <div className="join">
        <div className="join-top">
          <h2 className="section-heading">
            <span>Your Hackathon </span>
            <span className="section-heading-orange">Toolkit</span>
          </h2>
        </div>
        <div className="join-bottom">
          <div className="join-bottom-cards">
            <img src={toolkit1} alt="Toolkit 1" />
            <img src={toolkit2} alt="Toolkit 2" />
            <img src={toolkit3} alt="Toolkit 3" />
            <img src={toolkit4} alt="Toolkit 4" />
            <img src={toolkit5} alt="Toolkit 5" />
            <img src={toolkit6} alt="Toolkit 6" />
            <img src={toolkit7} alt="Toolkit 7" />
            <img src={toolkit8} alt="Toolkit 8" />
          </div>
          <p className="join-top-para">Even mobile apps are fine</p>
        </div>
      </div>
    </>
  );
}

export default Join;
