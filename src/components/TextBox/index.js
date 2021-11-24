import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

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
  <TextBoxWrapper data-testid="textBox">
    <TextBoxLabel data-testid="textBoxLabel" htmlFor={id}>
      {text}
    </TextBoxLabel>
    <TextBoxInput data-testid="textBoxInput" type="text" id={id} name={id} onChange={onChange} />
  </TextBoxWrapper>
);

TextBox.defaultProps = {
  onChange: () => {}
};

TextBox.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

export default TextBox;
