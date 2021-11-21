import styled, { css } from 'styled-components';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Answer from '<components>/Answer';

const AnswerContainer = styled.div(
  ({ theme: { space } }) => css`
    margin-bottom: ${space.basePlusXs};
    padding: ${space.basePlusXs};
    width: 100%;
  `
);

const Answers = ({ answers, handleClick }) => {
  // const [attributeValue, setAttributeValue] = useState(null);

  const onClick = ({ target: { value } }) => {
    setAttributeValue(value);
    handleClick(value);
  };

  return (
   <AnswerContainer>
      {answers.map((answer) => (
        <Answer
          key={answer.content}
          content={answer.content}
          numberOfVotes={answer.numberOfVotes}
          percentage={answer.percentage}
          onClick={onClick}
        />
      ))}

    </AnswerContainer>
    
  );
};

Answers.defaultProps = {
  handleClick: () => {}
};

Answers.propTypes = {
  handleClick: PropTypes.func,
  answers: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string,
    percentage: PropTypes.string,
  }),).isRequired
};

export default Answers;
