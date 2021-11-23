import { render, fireEvent, cleanup } from '<helpers>/test-utils';
import Button from '<components>/Button';

const setup = (props) => {
  const utils = render(<Button {...props}>Test Button</Button>);

  const { container } = utils;

  const wrapper = container.firstChild;

  return {
    ...utils,
    wrapper
  };
};

afterEach(cleanup);
describe('Component - Button', () => {
  it('should render', async () => {
    const { wrapper } = setup();

    expect(wrapper).toBeTruthy();
  });

  it('should render Button with text: Test Button', async () => {
    const { getByTestId } = setup();

    expect(getByTestId('button')).toHaveTextContent('Test Button');
  });

  it('should fireEvent onClick', async () => {
    const handleClick = jest.fn();
    const { getByTestId } = setup({ onClick: handleClick });

    fireEvent.click(getByTestId('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
