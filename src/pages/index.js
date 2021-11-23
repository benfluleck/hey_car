import { Router } from '@reach/router';

import QuestionPage from '<pages>/QuestionPage';
import QuestionsListPage from '<pages>/QuestionList';
import CreateQuestion from '<pages>/CreateQuestion';

const NotFound = () => <h1>Not Found</h1>;

const BaseRoutes = () => (
  <Router>
    <NotFound default />
    <QuestionPage path="/questions/:questionId" />
    <QuestionsListPage path="/" />
    <CreateQuestion path="/create" />
  </Router>
);

export default BaseRoutes;
