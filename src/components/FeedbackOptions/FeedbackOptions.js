import React from "react";
import { Button, Ul, Li } from "./styled";

const FeadbackOptions = ({ options, onLeaveFeedback }) => {
  const arrayOfNames = Object.keys(options);

  return (
    <Ul>
      {arrayOfNames.map((option, index) => {
        return (
          <Li key={index}>
            <Button className={option} type="button" onClick={onLeaveFeedback}>
              {option}
            </Button>
          </Li>
        );
      })}
    </Ul>
  );
};

export default FeadbackOptions;
