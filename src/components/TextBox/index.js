import styled, { css } from 'styled-components';

const TextBoxWrapper = styled.div(
  ({ theme: { space } }) => css`
    display: flex;
    align-items: center;
    margin-bottom: ${space.base};

    > label {
      padding-left: 0px;
      padding-right: ${space.base};
    }
  `
);

const TextBoxLabel = styled.label(
  ({ theme: { fontSize } }) => css`
    font-size: ${fontSize.base};
  `
);

const TextBoxInput = styled.input(
  ({ theme: { fontSize } }) => css`
    font-size: ${fontSize.base};
  `
);

const TextBox = ({ text, id, onChange }) => (
  <TextBoxWrapper>
    <TextBoxLabel htmlFor={id}>{text}</TextBoxLabel>
    <TextBoxInput type="text" id={id} name={id} onChange={onChange} />
  </TextBoxWrapper>
);

export default TextBox;
