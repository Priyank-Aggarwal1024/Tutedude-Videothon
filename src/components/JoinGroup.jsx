import "../styles/JoinGroup.css";
import jwg from "../assets/jwg.svg";
import logo from "../assets/logo.svg";
import hiredude from "../assets/hiredude.svg";
function JoinGroup() {
  return (
    <div className="tutedude-videothon-container">
      <div className="tutedude-videothon-welcome">Welcome To</div>
      <div className="tutedude-videothon-logo-container">
        <div className="navbar-logo-div">
          <img src={logo} alt="Logo" className="tutedude-logo" />
          <div className="navbar-logo-divider">|</div>
          <img src={hiredude} alt="Hiredude Logo" className="hiredude-logo" />
        </div>
      </div>
      <div className="tutedude-videothon-title">Videothon 1.0</div>

      <div className="tutedude-videothon-description">
        Join Tutedude's Videothon 1.0 Whatsapp Group Below to Get all Live
        Updates
      </div>

      <div className="tutedude-videothon-whatsapp-button">
        <img src={jwg} alt="Join Whats'app group" />
        <div className="tutedude-videothon-whatsapp-text">
          Join Whatsapp Group
        </div>
      </div>
    </div>
  );
}

export default JoinGroup;
