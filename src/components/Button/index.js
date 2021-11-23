import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ButtonContainer = styled.button(
  ({ theme: { space } }) => css`
    padding: ${space.sm};
  `
);

const Button = ({ onClick, children }) => (
  <ButtonContainer data-testid="button" onClick={onClick}>
    {children}
  </ButtonContainer>
);

Button.defaultProps = {
  onClick: () => {}
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default Button;
