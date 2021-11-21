import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Answers from '<components>/Answers';
import Text from '<components>/Text';
import Button from '<components>/Button';

const QuestionWrapper = styled.div(
  ({ theme: { space } }) => css`
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-flow: column wrap;

    > button {
      align-self: end;
      margin-right: ${space.basePlusXs};;
    }


  `
);

const Question = ({ question, answers, groupName }) => (
  <QuestionWrapper>
    <Text>Question: {question}</Text>
    <Answers answers={answers} />
    <Button>Save Button</Button>
  </QuestionWrapper>
);

Question.propTypes = {
  // groupName: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string,
    percentage: PropTypes.string,
  }),).isRequired
};

export default Question;
