import { render, cleanup } from '<helpers>/test-utils';
import QuestionSummary from '<components>/QuestionSummary';
import { question } from '<fixtures>/index.js';

const defaultProps = {
  ...question
};

const setup = (props) => {
  const utils = render(<QuestionSummary {...defaultProps} {...props} />);

  const { getAllByTestId } = utils;

  const textComponent = getAllByTestId('text-component');

  return {
    ...utils,
    textComponent
  };
};

afterEach(cleanup);

describe('Component - QuestionSummary', () => {
  it('should render', async () => {
    const { getByTestId } = setup();

    expect(getByTestId('question-summary')).toBeTruthy();
  });

  it('should render 3 text components', () => {
    const { getAllByTestId } = setup();

    expect(getAllByTestId('text-component')).toHaveLength(3);
  });

  it('should render a link with an href', () => {
    const { getByTestId } = setup();

    expect(getByTestId('question-summary')).toHaveAttribute('href', '/test/6');
  });

  it('should render text component with content', () => {
    const { getAllByTestId } = setup();

    expect(getAllByTestId('text-component')[0]).toHaveAttribute('font-size', 'base');
    expect(getAllByTestId('text-component')[0]).toHaveTextContent('This is a question');
    expect(getAllByTestId('text-component')[1]).toHaveTextContent('2014-11-11T08:40:51.620Z');
    expect(getAllByTestId('text-component')[1]).toHaveAttribute('font-size', 'xsBase');
    expect(getAllByTestId('text-component')[2]).toHaveAttribute('font-size', 'xsBase');
    expect(getAllByTestId('text-component')[2]).toHaveTextContent('Choices: 3');
  });
});
