import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const SelectWrapper = styled.div(
  ({ theme: { fontSize, space } }) => css`
    > label {
      padding-right: ${space.base};
    }

    > label + select {
      font-size: ${fontSize.base};
    }
  `
);

const SelectBox = ({ handleChange }) => (
  <SelectWrapper data-testid="select-component">
    <label data-testid="label-select" htmlFor="number-select">
      Choose the number of choices for this question
    </label>
    <select
      data-testid="select-html-component"
      id="number-select"
      onChange={handleChange}
      name="numbers"
    >
      <option value="">--Please choose an option--</option>
      {[1, 2, 3, 4, 5].map((number) => (
        <option data-testid="option-select" key={number} value={number}>
          {number}
        </option>
      ))}
    </select>
  </SelectWrapper>
);

SelectBox.defaultProps = {
  handleChange: () => {}
};

SelectBox.propTypes = {
  handleChange: PropTypes.func
};

export default SelectBox;
