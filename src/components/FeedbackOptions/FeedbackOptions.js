import React from "react";
import { Button, Ul, Li } from "./styled";
import PropTypes from "prop-types";

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

FeadbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeadbackOptions;
