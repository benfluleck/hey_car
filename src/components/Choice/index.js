import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import TextComponent from '<components>/Text';

const StatsContainer = styled.div(
  ({ theme: { space } }) => css`
    display: flex;
    align-items: center;

    > span {
      margin-left: ${space.base};
    }
  `
);

const ProgressBar = styled.progress(
  ({ theme: { space } }) => css`
    padding: ${space.sm};
  `
);

const ChoicesWrapper = styled.div(
  ({ theme: { colors } }) => css`
    > input[type='radio']:checked + label {
      background: ${colors.grayLight};
    }

    > input[type='radio'] {
      opacity: 0;
      position: fixed;
      width: 1px;
      /* Add if not using autoprefixer */
      -webkit-appearance: none;
      appearance: none;
      /* For iOS < 15 to remove gradient background */
      background-color: #fff;
      /* Not removed via appearance */
      margin: 0;
    }
  `
);

const ChoicesContainer = styled.label(
  ({ theme: { space, colors, fontSize } }) => css`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    font-size: ${fontSize.base};
    border: 1px solid ${colors.grayLight};
    border-radius: 4px;
    padding: ${space.base};
    margin-bottom: ${space.xs};
    cursor: pointer;
  `
);

const Choice = ({ content, isChecked, numberOfVotes, percentage, url, onChange }) => (
  <ChoicesWrapper>
    <input type="radio" onChange={onChange} name="radio" id={url} checked={isChecked} value={url} />
    <ChoicesContainer htmlFor={url}>
      <TextComponent>{content}</TextComponent>
      <StatsContainer>
        <TextComponent>{numberOfVotes} votes</TextComponent>
        <TextComponent>{percentage}</TextComponent>
        <ProgressBar max="100" value={percentage} />
      </StatsContainer>
    </ChoicesContainer>
  </ChoicesWrapper>
);

Choice.defaultProps = {
  onChange: () => {},
  percentage: undefined
};

Choice.propTypes = {
  content: PropTypes.string.isRequired,
  numberOfVotes: PropTypes.number.isRequired,
  percentage: PropTypes.number,
  onChange: PropTypes.func
};

export default Choice;
