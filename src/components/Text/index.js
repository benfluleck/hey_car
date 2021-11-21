import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const TextComponentWrapper = styled.span(
  ({ fontSize : userFontSize, theme: { space, fontSize } }) => css`
    margin: ${space.base};
    text-align: left;
    padding: ${space.basePlusXs};
    font-size: ${fontSize[userFontSize]};
  `
);

const TextComponent = ({ fontSize, children }) => <TextComponentWrapper fontSize={fontSize}>{children}</TextComponentWrapper>;

TextComponent.propTypes = {
  children: PropTypes.node.isRequired
};

export default TextComponent;
