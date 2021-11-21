import { Router, useLocation } from '@reach/router';

import QuestionPage from '<pages>/QuestionPage';
import QuestionsListPage from '<pages>/QuestionList';

// import GlobalContext from '<state>/GlobalContext'

const NotFound = () => <h1>Not Found</h1>;

const Questions = ({ children }) => (
  <>
    <h2>
      Flamingo
      {children}
    </h2>
  </>
);

const BaseRoutes = () => (
  <Router>
    <NotFound default />
    <Questions path="/">
      <QuestionsListPage path="/" />
      <QuestionPage path=":questionId" />
    </Questions>
  </Router>
);

export default BaseRoutes;
