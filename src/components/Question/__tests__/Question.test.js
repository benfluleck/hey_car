import { render, fireEvent, cleanup } from '<helpers>/test-utils';
import Question from '<components>/Question';
import { answers } from '<fixtures>/index.js';

const defaultProps = {
  question: 'This is a Test Question',
  answers
};

const setup = (props) => {
  const utils = render(<Question {...defaultProps} {...props} />);

  const { getAllByTestId, getByTestId } = utils;

  const choices = getAllByTestId('choice-component');
  const question = getByTestId('question-component');

  return {
    ...utils,
    choices,
    question
  };
};

afterEach(cleanup);

describe('Component - Question', () => {
  it('should render', async () => {
    const { question } = setup();

    expect(question).toBeTruthy();
  });

  it('should render 7 text components', async () => {
    const { getAllByTestId } = setup();

    expect(getAllByTestId('text-component')).toHaveLength(7);
  });

  it('should render textComponent with the Question text', async () => {
    const { getAllByTestId } = setup();

    expect(getAllByTestId('text-component')[0]).toHaveTextContent(
      'Question: This is a Test Question'
    );

    expect(getAllByTestId('text-component')[0]).toHaveAttribute('font-size', 'basePlus');
  });

  it('should render two choices', async () => {
    const { choices } = setup();

    expect(choices).toHaveLength(2);
  });

  it('should render a button', async () => {
    const { getByTestId } = setup();

    expect(getByTestId('button')).toBeTruthy();
  });

  it('should render an error if component has an error', async () => {
    const { getAllByTestId } = setup({ error: 'This is an error' });

    expect(getAllByTestId('text-component')[1]).toHaveTextContent('This is an error');

    expect(getAllByTestId('text-component')[1]).toHaveAttribute('font-size', 'basePlus');
    expect(getAllByTestId('text-component')[1]).toHaveAttribute('color', 'red');
  });

  it('should fireEvent handleClick', async () => {
    const handleClick = jest.fn();
    const { getByTestId } = setup({ onClick: handleClick });

    const button = getByTestId('button');

    await fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should fireEvent handleChange', async () => {
    const handleChange = jest.fn();
    const { getAllByTestId } = setup({ onChange: handleChange });

    const radioButton = getAllByTestId('radio-label')[0];

    await fireEvent.click(radioButton);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
