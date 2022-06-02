import "./Home.scss";
import { Component } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";

class Home extends Component {
  render() {
    return (
      <>
        <nav className="home">
          <section className="home-hero">
            <div className="home-hero-text">
              <h1 className="home-hero-text__name">Hello! my name is marcos</h1>
              <h3 className="home-hero-text__description">
                Web developer in Vancouver with a background in graphic design
              </h3>
            </div>
            <div className="home-hero-imgph">
              <img
                className="home-hero-imgph__img"
                alt="hero image"
                src="../assets/images/heroIMG.png"
              ></img>
            </div>
          </section>
          <section className="home-description"></section>
        </nav>
      </>
    );
  }
}
export default Home;
