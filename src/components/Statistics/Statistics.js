import React from "react";
import { Ul, Li } from "./styled";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <Ul>
    <Li>Good: {good}</Li>
    <Li>Neutral: {neutral}</Li>
    <Li>Bad: {bad}</Li>
    <Li>Total: {total}</Li>
    <Li>Positive feedback: {positivePercentage}% </Li>
  </Ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
