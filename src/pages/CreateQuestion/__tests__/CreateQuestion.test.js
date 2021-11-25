import { render, act, fireEvent, cleanup } from '<helpers>/test-utils';
import CreateQuestion from '<pages>/CreateQuestion';
import { answers } from '<fixtures>/index.js';

const defaultProps = {
  question: 'This is a Test Question',
  answers
};

const setup = (props) => {
  const utils = render(<CreateQuestion {...defaultProps} {...props} />);

  const { getAllByTestId, getByTestId } = utils;

  const saveButton = getByTestId('button');
  const textBoxInput = getByTestId('textBoxInput');

  return {
    ...utils,
    saveButton,
    textBoxInput
  };
};

afterEach(cleanup);

describe('Component - Question', () => {
  it('should render', async () => {
    const { getByTestId } = setup();

    expect(getByTestId('create-question-form')).toBeTruthy();
  });

  it('should render not render error on inital load', async () => {
    const { queryByTestId } = setup();

    expect(queryByTestId('error-component')).toBeNull();
  });

  it('should render error when save button is clicked', async () => {
    const { saveButton, queryByTestId } = setup();

    await fireEvent.click(saveButton);

    expect(queryByTestId('error-component')).toHaveTextContent('Please fill in a Question');
  });
});
