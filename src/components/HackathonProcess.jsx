import "../styles/hackathonProcess.css";
function HackathonProcess(props) {
  const steps = [
    {
      stepNo: "01",
      stepHeading: "Participate Solo",
      stepContent:
        "Work solo, think big, and edit your way to the top. This is your moment to prove what you can do on your own.",
    },
    {
      stepNo: "02",
      stepHeading: "Register Now",
      stepContent:
        "Click 'Apply Now' above for exclusive participant details and access to the dedicated Videothon Group.",
    },
    {
      stepNo: "03",
      stepHeading: "Edit and Submit",
      stepContent:
        "Receive 3 different themes & Dive deep into the Editing process, unleash your creativity, Submit your work before the deadline.",
    },
    {
      stepNo: "04",
      stepHeading: "Evaluation",
      stepContent:
        "Your video submissions will be carefully reviewed to select the finalists who showcase exceptional creativity among all.",
    },
    {
      stepNo: "05",
      stepHeading: "Results Announcement",
      stepContent:
        "Top 10 winners will be announced, with the top 1st place will be receiving the cash prize, celebrating creativity and achievement.",
    },
  ];
  return (
    <section className="hackathon">
      <div className="hack-left-outer">
        <div className="hackathon-left">
          <div className="hack-left-button">Videothon Process</div>
          <h2 className="hack-heading">
            Simple Steps to Start{" "}
            <span className="videthon-text-orange fw-700">
              Video Editing Hackathon
            </span>
          </h2>
        </div>
      </div>

      <div className="hackathon-right">
        {steps.map((item, idx) => (
          <div
            className={`hack-step-card-outer ${
              idx % 2 == 0 ? "card-even" : "card-odd"
            }`}
          >
            <Card item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
function Card({ item }) {
  return (
    <div className="hack-step-card">
      <div className="hack-step-card-no">{item.stepNo}</div>
      <div className="hack-step-card-heading">{item.stepHeading}</div>
      <div className="hack-step-card-content">{item.stepContent}</div>
    </div>
  );
}
export default HackathonProcess;
