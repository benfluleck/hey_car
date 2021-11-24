import { render, cleanup } from '<helpers>/test-utils';
import QuestionSummaries from '<components>/QuestionSummaries';
import { items } from '<fixtures>/index.js';

const defaultProps = {
  items
};

const setup = (props) => {
  const utils = render(<QuestionSummaries {...defaultProps} {...props} />);

  const { getAllByTestId, getByTestId } = utils;

  const summariesComponent = getByTestId('question-summaries');
  const summaryComponent = getAllByTestId('question-summary');

  return {
    ...utils,
    summariesComponent,
    summaryComponent
  };
};

afterEach(cleanup);

describe('Component - QuestionSummaries', () => {
  it('should render', async () => {
    const { summariesComponent } = setup();

    expect(summariesComponent).toBeTruthy();
  });

  it('should render 2 question summary components', async () => {
    const { summaryComponent } = setup();

    expect(summaryComponent).toHaveLength(2);
  });
});
