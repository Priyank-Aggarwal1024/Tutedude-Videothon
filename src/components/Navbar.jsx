import "../styles/Navbar.css";
import logo from "../assets/logo.svg";
import hiredude from "../assets/hiredude.svg";
function Navbar({ navigateRegister }) {
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo-div">
          <img src={logo} alt="Logo" className="tutedude-logo" />
          <div className="navbar-logo-divider">|</div>
          <img src={hiredude} alt="Hiredude Logo" className="hiredude-logo" />
        </div>
        <div className="navbar-registernow" onClick={navigateRegister}>
          Register Now{" "}
        </div>
      </div>
    </>
  );
}

export default Navbar;
