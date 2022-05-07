import "./Home.scss";
import { Component } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";

class Home extends Component {
  render() {
    return (
      <>
        <Header handleBack={this.handleBack} handleSkip={this.handleSkip} />
        <form className="app-form" onSubmit={this.handleNext}>
          <label className="app-form__question">
            {this.state.questionTitle}
            <select className="app-form__responses" defaultValue="select">
              <option
                className="app-form__responses--select"
                name="select"
                disabled=""
              >
                Select
              </option>
              {this.state.options &&
                this.state.options.map((option, index) => {
                  return (
                    <option
                      className="app-form__responses--select"
                      name={option}
                      value={option}
                      key={index}
                    >
                      {option}
                    </option>
                  );
                })}
            </select>
          </label>
          <div className="footer">
            <h2 className="app-form__name">shopify</h2>
            <Button
              children="Next"
              className="app-form__button"
              type="button"
              onClick={this.handleNext}
            />
          </div>
        </form>
      </>
    );
  }
}
export default Home;
