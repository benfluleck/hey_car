import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const TextComponentWrapper = styled.span(
  ({ fontSize: userFontSize, color: userColor, theme: { space, fontSize, colors } }) => css`
    margin: ${space.base};
    text-align: left;
    padding: ${space.basePlusXs};
    font-size: ${fontSize[userFontSize]};
    color: ${colors[userColor]};
  `
);

const TextComponent = ({ fontSize, color, children }) => (
  <TextComponentWrapper color={color} fontSize={fontSize}>
    {children}
  </TextComponentWrapper>
);

TextComponent.defaultProps = {
  children: undefined
};

TextComponent.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  children: PropTypes.node
};

export default TextComponent;
