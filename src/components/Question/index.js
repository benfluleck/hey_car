import { memo } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import ChoiceList from '<components>/ChoiceList';
import TextComponent from '<components>/Text';
import Button from '<components>/Button';

const QuestionWrapper = styled.div(
  ({ theme: { space } }) => css`
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-flow: column wrap;

    > button {
      align-self: end;
      margin-right: ${space.basePlusXs};
    }
  `
);

const Question = ({ question, error, answers, onClick, onChange }) => (
  <QuestionWrapper>
    <TextComponent fontSize="basePlus">Question: {question}</TextComponent>
    <TextComponent fontSize="basePlus" color="red">
      {error}
    </TextComponent>
    <ChoiceList answers={answers} handleChange={onChange} />
    <Button onClick={onClick}>Save Button</Button>
  </QuestionWrapper>
);

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      choices: PropTypes.string,
      percentage: PropTypes.string
    })
  ).isRequired
};

export default memo(Question);
