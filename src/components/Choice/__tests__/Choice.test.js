import { render, fireEvent, cleanup } from '<helpers>/test-utils';
import Choice from '<components>/Choice';

const defaultProps = {
  content: 'Test Question',
  numberOfVotes: 4,
  percentage: 54,
  url: 'test/4/'
}


const setup = props => {
  const utils = render(<Choice {...defaultProps} {...props}>Test Button</Choice>);

  const { getByTestId } = utils;

  const choice = getByTestId('choice-component');
  const radioButton = getByTestId('radio-choice-component')

  return {
    ...utils,
    radioButton,
    choice,
  };
};

afterEach(cleanup);

describe('Component - Choice', () => {

  it('should render', async () => {
    const { choice, debug } = setup();

    expect(choice).toBeTruthy();
  });

  it('should render radioButton', async () => {
    const { choice, debug } = setup();

    expect(choice).toBeTruthy();
  });



})
