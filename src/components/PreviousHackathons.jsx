import "../styles/PreviousHackathons.css";
import gold from "../assets/gold.png";
import silver from "../assets/silver.png";
import bronze from "../assets/bronze.png";
import youtubeRed from "../assets/youtube-red.svg";

const PreviousHackathons = () => {
  return (
    <div className="tutedude-prev-hackathons">
      <div className="tph-top">
        <div className="benefits-top">
          <h2 className="section-heading">
            <span>Previous </span>
            <span className="section-heading-orange"> Hackathon Champions</span>
          </h2>
          <p className="benefits-top-para">
            Meet the brightest minds who aced the challenge!
          </p>
        </div>
      </div>
      <div className="tph-cards">
        <div className="tph-card tph-card-1">
          <div className="tph-card-1-left">
            <h2 className="tph-card-1-heading">Tutedude BUILDATHON 1.0</h2>
            <div className="tph-card-mode">
              <div className="tph-card-mode-text">
                <span className="label">Mode: </span>
                <span className="value">Online</span>
              </div>
              <div className="tph-card-mode-date">12-15 June</div>
            </div>
            <div className="tph-card-ps-badge">Problem statement</div>
            <div className="tph-card-domain">Healthcare Domain</div>
            <div className="tph-card-ps-text">
              India’s healthcare sector is full of opportunities and challenges.
              Dig deep, explore the ecosystem, identify real pain points faced
              by patients, doctors and build a meaningful solution.
            </div>
            <div className="tph-card-watchnow tph-card-watchnow-large">
              <img
                src={youtubeRed}
                alt="Youtube Icon"
                className="tph-card-watchnow-img"
              />
              <span>Watch now</span>
            </div>
          </div>
          <div className="tph-card-1-right">
            <div className="tph-card-winner">
              <div className="tph-card-winner-badge">
                <span className="winner-text">Winner</span>
              </div>

              <div className="tph-card-medaldiv">
                <img src={gold} alt="Gold" className="tph-card-gold-img" />
              </div>
              <div className="tph-card-team">
                <span className="team-name">VITeens</span> <br />
                <span className="team-label">Team Members Name : </span>
                <span className="team-members">
                  Nirant, Tejas, Anish, Shubham, Niramay
                </span>
                <br />
                <a className="project-link" href="/">
                  Project Link <LinkArrow />
                </a>
              </div>
            </div>
            <div className="tph-card-runnerup1">
              <div className="tph-card-medaldiv">
                <img
                  src={silver}
                  alt="silver"
                  className="tph-card-silver-img"
                />
              </div>
              <div className="tph-card-team">
                <span className="team-name">VITeens</span> <br />
                <span className="team-label">Team Members Name : </span>
                <span className="team-members">
                  Nirant, Tejas, Anish, Shubham, Niramay
                </span>
                <br />
                <a className="project-link" href="/">
                  Project Link <LinkArrow />
                </a>
              </div>
            </div>
            <div className="tph-card-runnerup2">
              <div className="tph-card-medaldiv">
                <img
                  src={bronze}
                  alt="Bronze"
                  className="tph-card-bronze-img"
                />
              </div>
              <div className="tph-card-team">
                <span className="team-name">VITeens</span> <br />
                <span className="team-label">Team Members Name : </span>
                <span className="team-members">
                  Nirant, Tejas, Anish, Shubham, Niramay
                </span>
                <br />
                <a className="project-link" href="/">
                  Project Link <LinkArrow />
                </a>
              </div>
            </div>
            <div className="tph-card-watchnow tph-card-watchnow-small">
              <img
                src={youtubeRed}
                alt="Youtube Icon"
                className="tph-card-watchnow-img"
              />
              <span>Watch now</span>
            </div>
          </div>
        </div>
        <div className="tph-card tph-card-2">
          <div className="tph-card-2-left">
            <div className="tph-card-2l-left">
              <p className="tph-card-2-heading-top">UI/UX Hackathon |</p>
              <p className="tph-card-2-heading-bottom">Designathon 1.0</p>
            </div>
            <div className="tph-card-2l-right">
              <div className="tph-card-mode">
                <div className="tph-card-mode-text">
                  <span className="label">Mode: </span>
                  <span className="value">Online</span>
                </div>
                <div className="tph-card-mode-date">12-15 June</div>
              </div>
              <div className="tph-card-ps-badge">Problem statement</div>
              <div className="tph-card-domain"> Healthcare Domain</div>
              <div className="tph-card-ps-text">
                India’s healthcare sector is full of opportunities and
                challenges. Dig deep, explore the ecosystem, identify real pain
                points faced by patients, doctors and build a meaningful
                solution.
              </div>
            </div>
          </div>
          <div className="tph-card-2-right">
            <div className="tph-card-2-right-top">
              <div className="tph-card-winner">
                <div className="tph-card-winner-badge">
                  <span className="winner-text">Winner</span>
                </div>

                <div className="tph-card-medaldiv">
                  <img src={gold} alt="Gold" className="tph-card-gold-img" />
                </div>
                <div className="tph-card-team">
                  <span className="team-name">VITeens</span> <br />
                  <span className="team-label">Team Members Name : </span>
                  <span className="team-members">
                    Nirant, Tejas, Anish, Shubham, Niramay
                  </span>
                  <br />
                  <a className="project-link" href="/">
                    Project Link <LinkArrow />
                  </a>
                </div>
              </div>
              <div className="tph-card-runnerup1">
                <div className="tph-card-medaldiv">
                  <img
                    src={silver}
                    alt="silver"
                    className="tph-card-silver-img"
                  />
                </div>
                <div className="tph-card-team">
                  <span className="team-name">VITeens</span> <br />
                  <span className="team-label">Team Members Name : </span>
                  <span className="team-members">
                    Nirant, Tejas, Anish, Shubham, Niramay
                  </span>
                  <br />
                  <a className="project-link" href="/">
                    Project Link <LinkArrow />
                  </a>
                </div>
              </div>
              <div className="tph-card-runnerup2">
                <div className="tph-card-medaldiv">
                  <img
                    src={bronze}
                    alt="Bronze"
                    className="tph-card-bronze-img"
                  />
                </div>
                <div className="tph-card-team">
                  <span className="team-name">VITeens</span> <br />
                  <span className="team-label">Team Members Name : </span>
                  <span className="team-members">
                    Nirant, Tejas, Anish, Shubham, Niramay
                  </span>
                  <br />
                  <a className="project-link" href="/">
                    Project Link <LinkArrow />
                  </a>
                </div>
              </div>
            </div>
            <div className="tph-card-watchnow tph-card-watchnow-small">
              <img
                src={youtubeRed}
                alt="Youtube Icon"
                className="tph-card-watchnow-img"
              />
              <span>Watch now</span>
            </div>
          </div>
        </div>
        <div className="tph-card tph-card-3">
          <div className="tph-card-1-left">
            <h2 className="tph-card-1-heading">
              Web Development Hackathon 1.0
            </h2>
            <div className="tph-card-mode">
              <div className="tph-card-mode-text">
                <span className="label">Mode: </span>
                <span className="value">Online</span>
              </div>
              <div className="tph-card-mode-date">12-15 June</div>
            </div>
            <div className="tph-card-ps-badge">Problem statement</div>
            <div className="tph-card-domain">Healthcare Domain</div>
            <div className="tph-card-ps-text">
              India’s healthcare sector is full of opportunities and challenges.
              Dig deep, explore the ecosystem, identify real pain points faced
              by patients, doctors and build a meaningful solution.
            </div>
            <div className="tph-card-watchnow tph-card-watchnow-large">
              <img
                src={youtubeRed}
                alt="Youtube Icon"
                className="tph-card-watchnow-img"
              />
              <span>Watch now</span>
            </div>
          </div>
          <div className="tph-card-1-right">
            <div className="tph-card-winner">
              <div className="tph-card-winner-badge">
                <span className="winner-text">Winner</span>
              </div>

              <div className="tph-card-medaldiv">
                <img src={gold} alt="Gold" className="tph-card-gold-img" />
              </div>
              <div className="tph-card-team">
                <span className="team-name">VITeens</span> <br />
                <span className="team-label">Team Members Name : </span>
                <span className="team-members">
                  Nirant, Tejas, Anish, Shubham, Niramay
                </span>
                <br />
                <a className="project-link" href="/">
                  Project Link <LinkArrow />
                </a>
              </div>
            </div>
            <div className="tph-card-runnerup1">
              <div className="tph-card-medaldiv">
                <img
                  src={silver}
                  alt="silver"
                  className="tph-card-silver-img"
                />
              </div>
              <div className="tph-card-team">
                <span className="team-name">VITeens</span> <br />
                <span className="team-label">Team Members Name : </span>
                <span className="team-members">
                  Nirant, Tejas, Anish, Shubham, Niramay
                </span>
                <br />
                <a className="project-link" href="/">
                  Project Link <LinkArrow />
                </a>
              </div>
            </div>
            <div className="tph-card-runnerup2">
              <div className="tph-card-medaldiv">
                <img
                  src={bronze}
                  alt="Bronze"
                  className="tph-card-bronze-img"
                />
              </div>
              <div className="tph-card-team">
                <span className="team-name">VITeens</span> <br />
                <span className="team-label">Team Members Name : </span>
                <span className="team-members">
                  Nirant, Tejas, Anish, Shubham, Niramay
                </span>
                <br />
                <a className="project-link" href="/">
                  Project Link <LinkArrow />
                </a>
              </div>
            </div>
            <div className="tph-card-watchnow tph-card-watchnow-small">
              <img
                src={youtubeRed}
                alt="Youtube Icon"
                className="tph-card-watchnow-img"
              />
              <span>Watch now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
function LinkArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
    >
      <path
        d="M11.0763 1.31788C11.0294 0.825237 10.592 0.463907 10.0993 0.510825L2.07127 1.2754C1.57863 1.32232 1.2173 1.75972 1.26422 2.25236C1.31113 2.745 1.74853 3.10633 2.24118 3.05942L9.37723 2.37979L10.0569 9.51585C10.1038 10.0085 10.5412 10.3698 11.0338 10.3229C11.5265 10.276 11.8878 9.83858 11.8409 9.34594L11.0763 1.31788ZM1.67188 11.7073L2.36269 12.278L10.8751 1.97351L10.1843 1.40283L9.49347 0.832159L0.98106 11.1367L1.67188 11.7073Z"
        fill="#FFD256"
      />
    </svg>
  );
}

export default PreviousHackathons;
