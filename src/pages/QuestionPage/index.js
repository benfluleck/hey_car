import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useFetchQuestion from '<pages>/QuestionPage/DataProvider/hooks/useFetchQuestion';
import Question from '<components>/Question';
import styled, { css } from 'styled-components';
import { postChoice } from '<pages>/QuestionPage/DataProvider/api/client';

const QuestionWrapper = styled.div(
  ({ theme: { space } }) => css`
    padding: ${space.sm};
  `
);

const QuestionPage = ({ questionId }) => {
  const { item, isLoading } = useFetchQuestion(questionId);
  const [url, setUrl] = useState('');
  const [choices, setChoices] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    setChoices(item.choices);
  }, [item]);

  if (isLoading || !choices.length) {
    return <p>Loading......</p>;
  }

  const handleChange = (url) => {
    setError(null);
    setUrl(url);
  };

  const handleClick = async () => {
    if (url) {
      const { data } = await postChoice(url);
      const currentChoices = choices.filter((choice) => choice.choice !== data.choice);
      setChoices([...currentChoices, data].sort((a, b) => b.votes - a.votes));
    } else {
      setError('Please select a choice');
    }
  };

  if (item.question) {
    return (
      <QuestionWrapper>
        <Question
          error={error}
          question={item.question}
          answers={choices}
          onChange={handleChange}
          onClick={handleClick}
        />
      </QuestionWrapper>
    );
  }
};

QuestionPage.propTypes = {
  questionId: PropTypes.string
};

export default QuestionPage;
