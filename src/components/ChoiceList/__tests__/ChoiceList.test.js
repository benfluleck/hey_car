import { render, cleanup } from '<helpers>/test-utils';
import ChoiceList from '<components>/ChoiceList';
import { answers } from '<fixtures>/index.js';

const defaultProps = {
  answers
};

const setup = (props) => {
  const utils = render(<ChoiceList {...defaultProps} {...props} />);

  const { getAllByTestId } = utils;

  const choices = getAllByTestId('choice-component');
  const radioButtons = getAllByTestId('radio-choice-component');

  return {
    ...utils,
    radioButtons,
    choices
  };
};

afterEach(cleanup);

describe('Component - ChoiceList', () => {
  it('should render', async () => {
    const { container } = setup();

    expect(container.firstChild).toBeTruthy();
  });

  it('should render 2 choices', async () => {
    const { choices } = setup();

    expect(choices).toHaveLength(2);
  });

  it('should render 6 text component', async () => {
    const { getAllByTestId } = setup();

    expect(getAllByTestId('text-component')).toHaveLength(6);
  });
});
