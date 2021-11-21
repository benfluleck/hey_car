import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import TextComponent from '<components>/Text';

const StatsContainer = styled.div(
  ({ theme: { space } }) => css`
    display: flex;
    align-items: center;

    > ${TextComponent} {
      margin-left: ${space.base};
    }
  `
);

const ProgressBar = styled.progress(
  ({ theme: { space } }) => css`
    padding: ${space.sm};
  `
);

const AnswerContainer = styled.div(
  ({ theme: { space, colors, fontSize} }) => css`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    font-size: ${fontSize.base};
    border: 1px solid ${colors.lightGray};
    border-radius: 4px;
    padding: ${space.base};
    margin-bottom: ${space.xs};
    cursor: pointer;
  `
);

const Answer = ({ content, numberOfVotes, percentage, onClick }) => (
  <AnswerContainer onClick={onClick}>
    <TextComponent>{content}</TextComponent>
    <StatsContainer>
      <TextComponent>{numberOfVotes} votes</TextComponent>
      <TextComponent>{percentage}</TextComponent>
      <ProgressBar max="100" value={percentage} />
    </StatsContainer>
  </AnswerContainer>
);

Answer.defaultProps = {
  onClick: () => {},
  percentage: undefined
};

Answer.propTypes = {
  content: PropTypes.string.isRequired,
  numberOfVotes: PropTypes.number.isRequired,
  percentage: PropTypes.string,
  onClick: PropTypes.func
};

export default Answer;
