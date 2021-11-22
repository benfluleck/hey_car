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

const Question = ({ question, answers }) => (
  <QuestionWrapper>
    <TextComponent fontSize="basePlus">Question: {question}</TextComponent>
    <ChoiceList answers={answers} />
    <Button>Save Button</Button>
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

export default Question;
