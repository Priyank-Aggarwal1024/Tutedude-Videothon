import { useState } from "react";
import "../styles/Faq.css";
import { closefaq, openfaq } from "../assets";
function Faq() {
  const [faq, setFaq] = useState([
    {
      ques: "Can beginners join the Videothon?",
      ans: "Yes! You don’t need to be a pro. Beginners are welcome, and you can learn as you edit. Creativity matters more than experience.",
      open: false,
    },
    {
      ques: "Can I use AI tools, stock footage, or pre-made templates?",
      ans: "Yes, you can. But make sure you use them creatively and mention if you’ve used any third-party material.",
      open: false,
    },
    {
      ques: "Will I get a certificate?",
      ans: "Yes. All participants will get a participation certificate, and winners will get a special winning certificate to showcase on LinkedIn or resumes.",
      open: false,
    },
    {
      ques: "Is the Videothon online or offline?",
      ans: "It’s fully online, so you can participate from anywhere in the world.",
      open: false,
    },
    {
      ques: "Which editing tools can I use?",
      ans: "Any video editing software you’re comfortable with—like CapCut, Premiere Pro, Final Cut Pro, Filmora, etc. Even mobile apps are fine.",
      open: false,
    },
  ]);

  const handleToggleFaq = (idx) => {
    console.log(idx);
    setFaq(
      faq.map((item, i) => {
        if (i == idx) {
          item.open = !item.open;
        } else {
          item.open = false;
        }
        return item;
      })
    );
  };
  return (
    <>
      <div className="faq">
        <h2 className="section-heading">
          <span>Frequently Asked </span>
          <span className="section-heading-orange">Questions</span>
        </h2>
        <div className="faq-main">
          {faq.map((item, idx) => (
            <div
              className="faq-item"
              onClick={() => handleToggleFaq(idx)}
              key={idx}
            >
              <div className="faq-item-top">
                <div className="faq-item-top-ques">{item.ques}</div>
                <img
                  src={item.open ? openfaq : closefaq}
                  alt="Icon"
                  className="faq-item-top-icon"
                />
              </div>
              {item.open && (
                <div
                  className="faq-item-ans"
                  onClick={(e) => e.stopPropagation()}
                >
                  {item.ans}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Faq;
