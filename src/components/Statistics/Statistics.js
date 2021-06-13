import React from "react";
import { Ul, Li } from "./styled";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <Ul>
    <Li>Good: {good}</Li>
    <Li>Neutral: {neutral}</Li>
    <Li>Bad: {bad}</Li>
    <Li>Total: {total}</Li>
    <Li>Positive feedback: {positivePercentage}% </Li>
  </Ul>
);

export default Statistics;
