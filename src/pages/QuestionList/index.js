import { useEffect } from 'react';
import getAllQuestions from '<pages>/QuestionList/DataProvider/api/client';
import QuestionSummaries from '<components>/QuestionSummaries';

const questions = [
  { content: 'Benny', publishedAt: 322, numberOfChoices: '40' },
  { content: 'Bin', publishedAt: 322, numberOfChoices: '30' },
  { content: 'Fry', publishedAt: 32, numberOfChoices: '34' }
  ,{ content: 'Benny', publishedAt: 322, numberOfChoices: '40' },
  { content: 'Bin', publishedAt: 322, numberOfChoices: '30' },
  { content: 'Fry', publishedAt: 32, numberOfChoices: '34' }
  ,{ content: 'Benny', publishedAt: 322, numberOfChoices: '40' },
  { content: 'Bin', publishedAt: 322, numberOfChoices: '30' },
  { content: 'Fry', publishedAt: 32, numberOfChoices: '34' }
  ,{ content: 'Benny', publishedAt: 322, numberOfChoices: '40' },
  { content: 'Bin', publishedAt: 322, numberOfChoices: '30' },
  { content: 'Fry', publishedAt: 32, numberOfChoices: '34' }
  ,{ content: 'Benny', publishedAt: 322, numberOfChoices: '40' },
  { content: 'Bin', publishedAt: 322, numberOfChoices: '30' },
  { content: 'Fry', publishedAt: 32, numberOfChoices: '34' }
];

const QuestionList = () => {
  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await getAllQuestions();

      console.log({ response });
    };

    fetchQuestions();
  }, []);

  return (
    <QuestionSummaries
      questions={questions}
      // question="Is Benny here ?"
    />
  );
};

export default QuestionList;
