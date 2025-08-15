import { certificateImg } from "../assets";
import "../styles/Certificate.css";
function Certificate() {
  return (
    <>
      <div className="certificate">
        <h2 className="section-heading">
          <span>Earn professional </span>
          <span className="section-heading-orange">Certifications</span>
        </h2>
        <img
          src={certificateImg}
          alt="Certificate"
          className="certificate-img"
        />
        <p className="certificate-para">Participation Certifications</p>
      </div>
    </>
  );
}

export default Certificate;
