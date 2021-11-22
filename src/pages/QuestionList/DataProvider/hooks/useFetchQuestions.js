import { useEffect, useState } from 'react';

import getAllQuestions from '<pages>/QuestionList/DataProvider/api/client';

const useFetchQuestions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      setIsLoading(true);

      try {
        const { data } = await getAllQuestions();

        setItems(data);
        setIsLoading(false);
      } catch (error) {
        // fail silently
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  return {
    items,
    isLoading
  };
};

export default useFetchQuestions;
