import "../styles/Footer.css";
import logo from "../assets/logo2.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import youtube from "../assets/youtube.svg";
import instagram from "../assets/instagram.svg";
function Footer() {
  return (
    <>
      <div className="tutedude-footer">
        <div className="tutedude-footer-section1">
          <img
            src={logo}
            alt="Tutedude Logo"
            className="tutedude-footer-logo"
          />
          <div className="tutedude-footer-mainlink-section">
            <a
              href="https://tutedude.com/category/"
              className="tutedude-footer-link"
            >
              About us
            </a>
            <a
              href="https://tutedude.com/category/"
              className="tutedude-footer-link"
            >
              Contact us
            </a>
            <a
              href="https://tutedude.com/category/"
              className="tutedude-footer-link"
            >
              Privacy Policy
            </a>
            <a
              href="https://tutedude.com/category/"
              className="tutedude-footer-link"
            >
              Terms of Use
            </a>
            <a
              href="https://tutedude.com/category/"
              className="tutedude-footer-link"
            >
              Refund Policy
            </a>
            <a
              href="https://tutedude.com/category/"
              className="tutedude-footer-link"
            >
              Blogs
            </a>
            <a
              href="https://tutedude.com/category/"
              className="tutedude-footer-link"
            ></a>
          </div>
          <div className="tutedude-footer-social-section tutedude-footer-social-media-large">
            <a href="https://www.linkedin.com/company/tutedudeofficial/">
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a href="https://www.instagram.com/tutedudeofficial">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/tutedude.officials/">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://www.youtube.com/channel/UC2NQ2Ovazltz1-PYLmT7jxQ?view_as=subscriber">
              <img src={youtube} alt="Youtube" />
            </a>
          </div>
          <div className="tutedude-footer-contact-section">
            <p className="tutedude-footer-link-head">Contact Us</p>
            <div className="tutedude-footer-contact-section-inner">
              <a
                href="mailto:support@tutedude.com"
                className="tutedude-footer-link"
              >
                support@tutedude.com
              </a>
              <a className="tutedude-footer-link" href="tel:+91 8570818694">
                +91 8570818694
              </a>
            </div>
          </div>
          <div className="tutedude-footer-registered-section">
            <p className="tutedude-footer-link-head">Registered Office</p>
            <p className="tutedude-footer-link">
              Suncity success tower,
              <br />
              sector 65, Gurugram,
              <br />
              Haryana, 122005
            </p>
          </div>
        </div>
        <div className="tutedude-footer-section2">
          <div className="tutedude-footer-course-section">
            <p className="tutedude-footer-link-head">Design </p>
            <div className="tutedude-footer-course-section-inner">
              <a
                href="https://tutedude.com/category/illustrator"
                className="tutedude-footer-link"
              >
                Adobe Illustrator
              </a>
              <a
                href="https://tutedude.com/category/photoshop"
                className="tutedude-footer-link"
              >
                Adobe Photoshop
              </a>
              <a
                href="https://tutedude.com/category/premierepro"
                className="tutedude-footer-link"
              >
                Adobe Premier pro
              </a>
              <a
                href="https://tutedude.com/category/aftereffects"
                className="tutedude-footer-link"
              >
                Adobe After Effect
              </a>
              <a
                href="https://tutedude.com/category/uiux"
                className="tutedude-footer-link"
              >
                UI UX Designing
              </a>
              <a
                href="https://tutedude.com/category/uxresearch"
                className="tutedude-footer-link"
              >
                UX Research
              </a>
            </div>
          </div>
          <div className="tutedude-footer-course-section">
            <p className="tutedude-footer-link-head">IT and Software </p>
            <div className="tutedude-footer-course-section-inner">
              <a
                href="https://tutedude.com/category/aitools"
                className="tutedude-footer-link"
              >
                AI Tools
              </a>
              <a
                href="https://tutedude.com/category/cpp"
                className="tutedude-footer-link"
              >
                C++
              </a>
              <a
                href="https://tutedude.com/category/competitiveprogramming"
                className="tutedude-footer-link"
              >
                Competitive Programming
              </a>
              <a
                href="https://tutedude.com/category/datascience"
                className="tutedude-footer-link"
              >
                Data Science
              </a>
              <a
                href="https://tutedude.com/category/datastructure"
                className="tutedude-footer-link"
              >
                Data Structures & Algorithms
              </a>
              <a
                href="https://tutedude.com/category/dbms"
                className="tutedude-footer-link"
              >
                DBMS
              </a>
              <a
                href="https://tutedude.com/category/devops"
                className="tutedude-footer-link"
              >
                DevOPS
              </a>
              <a
                href="https://tutedude.com/category/dsawithpython"
                className="tutedude-footer-link"
              >
                DSA with Python
              </a>
              <a
                href="https://tutedude.com/category/ethicalhacking"
                className="tutedude-footer-link"
              >
                Ethical Hacking
              </a>
              <a
                href="https://tutedude.com/category/java"
                className="tutedude-footer-link"
              >
                Java
              </a>
              <a
                href="https://tutedude.com/category/machinelearning"
                className="tutedude-footer-link"
              >
                Machine Learning
              </a>
              <a
                href="https://tutedude.com/category/python"
                className="tutedude-footer-link"
              >
                Python
              </a>
            </div>
          </div>
        </div>
        <div className="tutedude-footer-section3">
          <div className="tutedude-footer-course-section">
            <p className="tutedude-footer-link-head">Development </p>
            <div className="tutedude-footer-course-section-inner">
              <a
                href="https://tutedude.com/category/appdevelopment"
                className="tutedude-footer-link"
              >
                App Development
              </a>
              <a
                href="https://tutedude.com/category/flutter"
                className="tutedude-footer-link"
              >
                Flutter
              </a>
              <a
                href="https://tutedude.com/category/reactjs"
                className="tutedude-footer-link"
              >
                React JS
              </a>
              <a
                href="https://tutedude.com/category/reactnative"
                className="tutedude-footer-link"
              >
                React Native
              </a>
              <a
                href="https://tutedude.com/category/mernstack"
                className="tutedude-footer-link"
              >
                Web Development with <br /> MERN Stack
              </a>
              <a
                href="https://tutedude.com/category/webdevelopment"
                className="tutedude-footer-link"
              >
                Web Development with <br /> PHP/MySQL
              </a>
            </div>
          </div>
          <div className="tutedude-footer-course-section">
            <p className="tutedude-footer-link-head">Business Course</p>
            <div className="tutedude-footer-course-section-inner">
              <a
                href="https://tutedude.com/category/dataanalytics"
                className="tutedude-footer-link"
              >
                Data Analytics
              </a>
              <a
                href="https://tutedude.com/category/digitalmarketing"
                className="tutedude-footer-link"
              >
                Digital Marketing
              </a>
              <a
                href="https://tutedude.com/category/financialmodelling"
                className="tutedude-footer-link"
              >
                Financial Modelling valuation
              </a>
              <a
                href="https://tutedude.com/category/riskmanagement"
                className="tutedude-footer-link"
              >
                Financial Risk Management
              </a>
              <a
                href="https://tutedude.com/category/powerbi"
                className="tutedude-footer-link"
              >
                Power BI
              </a>
              <a
                href="https://tutedude.com/category/technicalanalysis"
                className="tutedude-footer-link"
              >
                Technical Analysis
              </a>
              <a
                href="https://tutedude.com/category/fundamentalanalysis"
                className="tutedude-footer-link"
              >
                Stock Market
              </a>
            </div>
          </div>
        </div>
        <div className="tutedude-footer-section4">
          <div className="tutedude-footer-course-section">
            <p className="tutedude-footer-link-head">
              Guaranteed Internship Program{" "}
            </p>
            <div className="tutedude-footer-course-section-inner">
              <a
                href="https://tutedude.com/tracks/appdevelopment"
                className="tutedude-footer-link"
              >
                App Development <br /> Internship Track
              </a>
              <a
                href="https://tutedude.com/tracks/datascience"
                className="tutedude-footer-link"
              >
                Data Science Internship <br /> Track
              </a>
              <a
                href="https://tutedude.com/tracks/fullstackdevelopment"
                className="tutedude-footer-link"
              >
                Full Stack Internship Track
              </a>
              <a
                href="https://tutedude.com/category/reactnative"
                className="tutedude-footer-link"
              >
                React Native
              </a>
              <a
                href="https://tutedude.com/tracks/pythondevelopment"
                className="tutedude-footer-link"
              >
                Python Internship Track
              </a>
              <a
                href="https://tutedude.com/tracks/uiuxtrack"
                className="tutedude-footer-link"
              >
                UI/UX Internship Track
              </a>
            </div>
          </div>
          <div className="tutedude-footer-course-section">
            <p className="tutedude-footer-link-head">Communication</p>
            <div className="tutedude-footer-course-section-inner">
              <a
                href="https://tutedude.com/category/appdev"
                className="tutedude-footer-link"
              >
                App Developer Combo Pack
              </a>
              <a
                href="https://tutedude.com/category/techgeek"
                className="tutedude-footer-link"
              >
                Tech Geek Combo Pack
              </a>
              <a
                href="https://tutedude.com/category/fullstackdev"
                className="tutedude-footer-link"
              >
                Full Stack Combo Pack
              </a>
              <a
                href="https://tutedude.com/category/datascientist"
                className="tutedude-footer-link"
              >
                Data Scientist Combo Pack
              </a>
              <a
                href="https://tutedude.com/category/designing"
                className="tutedude-footer-link"
              >
                Creative Designer Combo Pack
              </a>
              <a
                href="https://tutedude.com/category/allaccess"
                className="tutedude-footer-link"
              >
                All 30 Courses
              </a>
              <a
                href="https://tutedude.com/category/customizepack"
                className="tutedude-footer-link"
              >
                Create Your Own
              </a>
            </div>
          </div>
        </div>
        <div className="tutedude-footer-section4 tutedude-footer-section4-small">
          <div className="tutedude-footer-course-section">
            <p className="tutedude-footer-link-head">Recommended courses</p>
            <div className="tutedude-footer-course-section-inner">
              <a
                href="https://tutedude.com/category/python"
                className="tutedude-footer-link"
              >
                Python
              </a>
              <a
                href="https://tutedude.com/category/mernstack"
                className="tutedude-footer-link"
              >
                Web Development with MERN Stack
              </a>
              <a
                href="https://tutedude.com/category/competitiveprogramming"
                className="tutedude-footer-link"
              >
                Competitive Programming
              </a>
              <a
                href="https://tutedude.com/category/datascience"
                className="tutedude-footer-link"
              >
                Data Science
              </a>
              <a
                href="https://tutedude.com/category/datastructure"
                className="tutedude-footer-link"
              >
                Data Structures & Algorithms
              </a>
              <a
                href="https://tutedude.com/category/uiux"
                className="tutedude-footer-link"
              >
                UI/UX Design
              </a>
              <a
                href="https://tutedude.com/category/uxresearch"
                className="tutedude-footer-link"
              >
                UX research{" "}
              </a>
              <a
                href="https://tutedude.com/category/financialmodelling"
                className="tutedude-footer-link"
              >
                Financial Modelling valuation
              </a>
              <a
                href="https://tutedude.com/#courses"
                className="tutedude-footer-link tutedude-footer-link-othercourses"
              >
                View other course
              </a>
            </div>
          </div>
          <div className="tutedude-footer-social-section-small-outer">
            <p className="tutedude-footer-link-head">Social media</p>
            <div className="tutedude-footer-social-section">
              <a href="https://www.linkedin.com/company/tutedudeofficial/">
                <img src={linkedin} alt="Linkedin" />
              </a>
              <a href="https://www.instagram.com/tutedudeofficial">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/tutedude.officials/">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="https://www.youtube.com/channel/UC2NQ2Ovazltz1-PYLmT7jxQ?view_as=subscriber">
                <img src={youtube} alt="Youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
