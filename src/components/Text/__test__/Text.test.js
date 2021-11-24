import { render, cleanup } from '<helpers>/test-utils';
import Text from '<components>/Text';

const setup = (props) => {
  const utils = render(<Text {...props}>Test Text</Text>);

  const { container } = utils;

  const wrapper = container.firstChild;

  return {
    ...utils,
    wrapper
  };
};

afterEach(cleanup);
describe('Component - Text', () => {
  it('should render', async () => {
    const { wrapper } = setup();

    expect(wrapper).toBeTruthy();
  });

  it('should render Text with text: Test Text', async () => {
    const { getByTestId } = setup();

    expect(getByTestId('text-component')).toHaveTextContent('Test Text');
  });

  it('should render Text component with fontSize', async () => {
    const { getByTestId } = setup({ fontSize: 'sm' });

    expect(getByTestId('text-component')).toHaveAttribute('font-size', 'sm');
  });

  it('should render Text component with color', async () => {
    const { getByTestId } = setup({ color: 'red' });

    expect(getByTestId('text-component')).toHaveAttribute('color', 'red');
  });
});
