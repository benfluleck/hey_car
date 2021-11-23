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
  <SelectWrapper>
    <label htmlFor="number-select">Choose the number of choices for this question</label>
    <select id="number-select" onChange={handleChange} name="numbers">
      <option value="">--Please choose an option--</option>
      {[1, 2, 3, 4, 5].map((number) => (
        <option key={number} value={number}>
          {number}
        </option>
      ))}
    </select>
  </SelectWrapper>
);

export default SelectBox;
