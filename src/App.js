import React, { Component } from "react";
import FeadbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import SectionWithTitle from "./components/Section";
import ErrorMessage from "./components/ErrorMessage";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (e) => {
    const name = e.target.textContent;

    this.setState((prevState) => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const ratio = (this.state.good / this.countTotalFeedback()) * 100;
    return ratio.toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <SectionWithTitle title="Pease leave your Feedback">
          <FeadbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </SectionWithTitle>

        <SectionWithTitle title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <ErrorMessage message="No feedback given" />
          )}
        </SectionWithTitle>
      </>
    );
  }
}

export default App;
