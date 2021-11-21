import { Router, useLocation } from '@reach/router';

const QuestionPage = () => {
  const { location } = useLocation();

  console.log({ location });

  return <h1>Benny</h1>;
};
export default QuestionPage;
