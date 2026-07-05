import "./TrustedCompanies.css";

import google from "../../assets/google.png";
import deepseek from "../../assets/deepSeek.png";
import gradio from "../../assets/gradio.png";
import copilot from "../../assets/copilot.png";
import gemini from "../../assets/gemini.png";
import logo from "../../assets/logo.png";

import leftArrow from "../../assets/proicons_arrow-left.png";
import rightArrow from "../../assets/proicons_arrow-right.png";

function TrustedCompanies() {
  return (
    <section className="trusted">

      <h3>TRUSTED BY LEADING COMPANIES</h3>

      <div className="logo-slider">

        <img
          src={leftArrow}
          alt="Left Arrow"
          className="arrow-img"
        />

        <div className="company-logos">
          <img src={google} alt="Google" />
          <img src={deepseek} alt="DeepSeek" />
          <img src={gradio} alt="Gradio" />
          <img src={copilot} alt="Copilot" />
          <img src={gemini} alt="Gemini" />
          <img src={logo} alt="Logo" />
        </div>

        <img
          src={rightArrow}
          alt="Right Arrow"
          className="arrow-img"
        />

      </div>

    </section>
  );
}

export default TrustedCompanies;