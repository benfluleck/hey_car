import { Router } from '@reach/router';

import { useOnlineStatus } from '<helpers>/useOnlineStatus';

import QuestionPage from '<pages>/QuestionPage';
import QuestionsListPage from '<pages>/QuestionList';
import CreateQuestion from '<pages>/CreateQuestion';

const NotFound = () => <h1>Not Found</h1>;

const OfflineMessage = () => <h2>Your App is offline</h2>;

const BaseRoutes = () => {
  const isOnline = useOnlineStatus();
  return (
    <Router>
      <NotFound default />
      {!isOnline && <OfflineMessage path="/" />}
      <QuestionPage path="/questions/:questionId" />
      <QuestionsListPage path="/" />
      <CreateQuestion path="/create" />
    </Router>
  );
};

export default BaseRoutes;
