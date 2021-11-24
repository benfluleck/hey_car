import { render, fireEvent, cleanup } from '<helpers>/test-utils';
import Choice from '<components>/Choice';

const defaultProps = {
  content: 'Test Question',
  numberOfVotes: 4,
  percentage: 54,
  url: 'test/4/'
};

const setup = (props) => {
  const utils = render(<Choice {...defaultProps} {...props} />);

  const { getByTestId } = utils;

  const choice = getByTestId('choice-component');
  const radioButton = getByTestId('radio-choice-component');

  return {
    ...utils,
    radioButton,
    choice
  };
};

afterEach(cleanup);

describe('Component - Choice', () => {
  it('should render', async () => {
    const { choice } = setup();

    expect(choice).toBeTruthy();
  });

  it('should render radioButton', async () => {
    const { radioButton } = setup();

    expect(radioButton).toHaveAttribute('id', 'test/4/');
    expect(radioButton).toHaveAttribute('type', 'radio');
    expect(radioButton).toHaveAttribute('value', 'test/4/');
  });

  it('should render 3 text component', async () => {
    const { getAllByTestId } = setup();

    expect(getAllByTestId('text-component')).toHaveLength(3);
  });

  it('should render content for 1st text component', async () => {
    const { getAllByTestId } = setup();

    expect(getAllByTestId('text-component')[0]).toHaveTextContent('Test Question');
  });

  it('should render content for 2nd text component', async () => {
    const { getAllByTestId } = setup();

    expect(getAllByTestId('text-component')[1]).toHaveTextContent('4 votes');
  });

  it('should render content for 3rd text component', async () => {
    const { getAllByTestId } = setup();

    expect(getAllByTestId('text-component')[2]).toHaveTextContent('54%');
  });

  it('should render progress bar', async () => {
    const { getByTestId } = setup();

    expect(getByTestId('choice-progress')).toHaveAttribute('max', '100');
    expect(getByTestId('choice-progress')).toHaveAttribute('value', '54');
  });

  it('should render progress bar', async () => {
    const handleChange = jest.fn();

    const { getByTestId } = setup({ onChange: handleChange });
    const radioChoice = getByTestId('radio-choice-component');

    fireEvent.change(radioChoice, {
      target: { value: 'test/45/' }
    });

    expect(radioChoice).toHaveAttribute('value', 'test/45/');
  });
});
