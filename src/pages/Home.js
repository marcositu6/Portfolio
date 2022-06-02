import "./Home.scss";
import { Component } from "react";
import axios from "axios";
import heroIMG from "../assets/images/heroIMG.png";
import headshot from "../assets/images/headshot.png";
import { ImPlay, ImLinkedin, ImMail } from "react-icons/im";

class Home extends Component {
  render() {
    return (
      <>
        <nav className="home">
          <section className="home-hero">
            <div className="home-hero-text">
              <h1 className="home-hero-text__name">Hello! my name is Marcos</h1>
              <h3 className="home-hero-text__description">
                Web developer in Vancouver with a background in graphic design
              </h3>
            </div>
            <div className="home-hero-imgph">
              <img
                className="home-hero-imgph__img"
                alt="hero image"
                src={heroIMG}
              ></img>
            </div>
          </section>
          <section className="home-description">
            <div className="home-description-imgph">
              <img
                className="home-description-imgph__img"
                alt="hero image"
                src={headshot}
              ></img>
            </div>
            <div className="home-description-socials">
              <h3 className="home-description-socials__title">Socials</h3>
              <a
                className="home-description-socials__youtube"
                href="https://www.youtube.com/channel/UC9w82fODcKZ3ZBYavH71XgQ"
              >
                {" "}
                <ImPlay />
              </a>
              <a
                className="home-description-socials__linkedin"
                href="https://www.youtube.com/channel/UC9w82fODcKZ3ZBYavH71XgQ"
              >
                {" "}
                <ImLinkedin />
              </a>
              <a
                className="home-description-socials__mail"
                href="mailto:marcositu6@gmail.com"
              >
                {" "}
                <ImMail />
              </a>
            </div>
            <div className="home-description-text">
              <h5 className="home-description-text__title">About me</h5>
              <p className="home-description-text__paragraph"></p>
            </div>
          </section>
        </nav>
      </>
    );
  }
}
export default Home;
