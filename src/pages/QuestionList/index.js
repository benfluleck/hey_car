import QuestionSummaries from '<components>/QuestionSummaries';
import TextComponent from '<components>/Text';
import styled, { css } from 'styled-components';
import useFetchQuestions from '<pages>/QuestionList/DataProvider/hooks/useFetchQuestions';

const QuestionWrapper = styled.div(
  ({ theme: { space } }) => css`
    padding: ${space.md};
  `
);

const QuestionList = () => {
  const { items, isLoading } = useFetchQuestions();

  if (isLoading || !items.length) {
    return <p>Loading......</p>;
  }

  return (
    <QuestionWrapper>
      <TextComponent fontSize="md">Questions</TextComponent>
      <QuestionSummaries items={items} />
    </QuestionWrapper>
  );
};

export default QuestionList;
