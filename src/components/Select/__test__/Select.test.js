import { render, fireEvent, cleanup } from '<helpers>/test-utils';
import Select from '<components>/Select';

const setup = (props) => {
  const utils = render(<Select {...props} />);

  const { getByTestId } = utils;

  const select = getByTestId('select-component');

  return {
    ...utils,
    select,
  };
};

afterEach(cleanup);

describe('Component - SelectBox', () => {
  it('should render', async () => {
    const { select } = setup();

    expect(select).toBeTruthy();
  });

  it('should render a label component with a for attribute', async () => {
    const { getByTestId } = setup();

    expect(getByTestId('label-select')).toHaveTextContent('Choose the number of choices for this question')
    expect(getByTestId('label-select')).toHaveAttribute('for','number-select')
  });

  it('should render a select component with id of the label component', async () => {
    const { getByTestId } = setup();

    expect(getByTestId('select-html-component')).toHaveAttribute('id','number-select')
    expect(getByTestId('select-html-component')).toHaveAttribute('name','numbers')
  });

  it('should render option components', async () => {
    const { getAllByTestId } = setup();

    expect(getAllByTestId('option-select')).toHaveLength(5)
  });
  
  


})