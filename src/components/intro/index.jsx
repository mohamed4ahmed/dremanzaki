import React from "react";
// import Avatar from "../../assets/img/avatar.png";
// import Avatar1 from "../../assets/img/chan-dung-edit.png";
import Avatar2 from "../../assets/img/full-nguoi-edit.webp";
import "./style.css";
const Greeting = () => {
  return (
    <div className="intro-wrapper">
      <div className="nav-wrapper">
        <div className="nav-wrapper-left__dots-wrapper">
          <div className="browser-dot dot-1"></div>
          <div className="browser-dot dot-2"></div>
          <div className="browser-dot dot-3"></div>
        </div>
        <ul className="nav-wrapper-right__navigation-list">
          <li>
            <a href="mailto:youyaahmed1731993@gmail.com">Contact</a>
          </li>
        </ul>
      </div>
      <div className="left-column">
        <img className="avatar" src={Avatar2} alt="Avatar" />
        <h5>Dr Eman Zaki</h5>
        <p>{" Medical Radiology "}</p>
      </div>
      <div className="right-column">
        <div className="right-column__preview-shadow">
          <div className="right-column__preview">
            <div className="corner corner-tl"></div>
            <div className="corner corner-tr"></div>
            <h3>What I Do?</h3>
            <p style={{ fontSize: "16px" }}>
              senior-level Medical Radiology, interested in abdominal imaging,
              ultrasound and computed tomography , specializes in diagnosing and
              treating disease and injury, using medical imaging techniques such
              as x-rays, computed tomography (CT), magnetic resonance imaging
              (MRI), nuclear medicine, positron emission tomography (PET),
              fusion imaging, and ultrasound.
            </p>
            {/* <img className="avatar" src={Avatar} alt="Avatar" /> */}

            <div className="corner corner-br"></div>
            <div className="corner corner-bl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
