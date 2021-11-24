import { render, fireEvent, cleanup } from '<helpers>/test-utils';
import TextBox from '<components>/TextBox';

const defaultProps = {
  text: 'Enter Question here',
  id: 'textBox1'
};

const setup = (props) => {
  const utils = render(<TextBox {...defaultProps} {...props} />);

  const { getByTestId } = utils;

  const textBox = getByTestId('textBox');
  const textBoxLabel = getByTestId('textBoxLabel');
  const textBoxInput = getByTestId('textBoxInput');

  return {
    ...utils,
    textBox,
    textBoxInput,
    textBoxLabel
  };
};

afterEach(cleanup);
describe('Component - TextBox', () => {
  it('should render', async () => {
    const { textBox } = setup();

    expect(textBox).toBeTruthy();
  });

  it('should render TextBox with Text', async () => {
    const { textBoxLabel } = setup();
    expect(textBoxLabel).toHaveTextContent('Enter Question here');
  });

  it('should render TextBox with id the same as textBoxLabel For attribute', async () => {
    const { textBoxLabel, textBoxInput } = setup();

    expect(textBoxInput).toHaveAttribute('id', 'textBox1');
    expect(textBoxLabel).toHaveAttribute('for', 'textBox1');
  });

  it('should call onChange function', async () => {
    const handleChange = jest.fn();
    const { textBoxInput } = setup({ onChange: handleChange });

    fireEvent.change(textBoxInput, { target: { value: 'Choice 1' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
