import useFetchQuestion from '<pages>/QuestionPage/DataProvider/hooks/useFetchQuestion';
import Question from '<components>/Question';
import styled, { css } from 'styled-components';

const QuestionWrapper = styled.div(
  ({ theme: { space } }) => css`
    padding: ${space.sm};
  `
);

const QuestionPage = ({ questionId }) => {
  const { item, isLoading } = useFetchQuestion(questionId);

  if (isLoading || !Object.keys(item).length) {
    return <p>Loading......</p>;
  }

  if (item.question) {
    return (
      <QuestionWrapper>
        <Question question={item.question} answers={item.choices} />
      </QuestionWrapper>
    );
  }
};
export default QuestionPage;
