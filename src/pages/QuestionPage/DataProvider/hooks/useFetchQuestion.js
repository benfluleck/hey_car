import { useEffect, useState } from 'react';

import { getQuestion } from '<pages>/QuestionPage/DataProvider/api/client';

const useFetchQuestion = (questionId) => {
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState({});

  useEffect(() => {
    const fetchQuestion = async () => {
      setIsLoading(true);

      try {
        const { data } = await getQuestion(questionId);

        setItem(data);
        setIsLoading(false);
      } catch (error) {
        // fail silently
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestion();
  }, []);

  return {
    item,
    isLoading
  };
};

export default useFetchQuestion;
