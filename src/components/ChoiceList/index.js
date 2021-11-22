import { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Choice from '<components>/Choice';

const ChoicesContainer = styled.div(
  ({ theme: { space } }) => css`
    margin-bottom: ${space.basePlusXs};
    padding: ${space.basePlusXs};
    width: 100%;
  `
);

const ChoicesList = ({ answers, handleClick }) => {
  const [attributeValue, setAttributeValue] = useState(null);

  const onChange = ({ target: { value } }) => {
    setAttributeValue(value);
    handleClick(value);
  };

  const sum = answers.reduce((acc, curr) => {
    return acc + curr.votes;
  }, 0);

  return (
    <ChoicesContainer>
      {answers.map((answer) => {
        return (
          <Choice
            key={answer.url}
            content={answer.choice}
            url={answer.url}
            numberOfVotes={answer.votes}
            percentage={Math.round((answer.votes / sum) * 100)}
            onChange={onChange}
            isChecked={attributeValue === answer.url}
          />
        );
      })}
    </ChoicesContainer>
  );
};

ChoicesList.defaultProps = {
  handleClick: () => {}
};

ChoicesList.propTypes = {
  handleClick: PropTypes.func,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      votes: PropTypes.number
    })
  ).isRequired
};

export default ChoicesList;
